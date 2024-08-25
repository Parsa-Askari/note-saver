import { useNavigate, useParams } from "react-router-dom";
import { useState,useContext } from "react";
import { ReloaderContext } from "../contexts/ReloaderContext";
import { handleChange,handleSumbit ,GetNotes,FilterNotes,handleNoteClicks} from "../hooks/NoteHooks";
import { NoteWindowContext } from "../contexts/NoteWindowContext";
import { SearchContext } from "../contexts/SearchContext";
import SearchBar from "../components/UI/SeachBar";
import NoteItem from "../components/NoteItem";
import NewItemModal from "../components/Modals/NewItemModal";
import Header from "../containers/Header";
import MainMenuBtn from "../components/UI/MainMenuBtn";
import "./styles/Notes.scss"
import './styles/scrollbars.scss'
import NoItemFound from "../components/UI/NoItemFound";
function NoteMenu()
{
    const items=[
                {"text":"Export","id":"export","class":"col justify-content-center",
                    "data-bs-toggle":"","data-bs-target":""
                },
                
                {"text":"Add New Note","id":"Add","class":"col justify-content-center",
                    "data-bs-toggle":"modal","data-bs-target":"#addNewItem"
                },
                {"text":"Import","id":"import","class":"col justify-content-center",
                    "data-bs-toggle":"","data-bs-target":""
                }]
    return(
        <Header >
            {items.map((item,index)=><MainMenuBtn 
                                        key={index}
                                        btnClass={item['class']} 
                                        optionText={item['text']} 
                                        id={item['id']}
                                        dataBsToggle={item['data-bs-toggle']}
                                        dataBsTarget={item['data-bs-target']}
                                        />)}

        </Header>
    )
}
function NoteItems({NotesList,topic_id})
{
    const nav=useNavigate();
    return(
        <div id="notes">
             {NotesList.map((item,index)=><NoteItem 
                                            key={index}
                                            handleNoteClicks={(event)=>handleNoteClicks(event,nav,topic_id)}
                                            note_id={item['notes_id']}
                                            note_name={item['notes_name']}
             />)}
        </div>
       
    )
}
function Notes()
{
    const {topic_id}=useParams();
    const[NotesList,setNotesList]=useState([]);
    const[noteName,setNoteName]=useState([]);
    const[filterdNotes,setFilterdNotes]=useState("");
    const {reload,setReload}=useContext(ReloaderContext)
    const{displayedNoteName}=useContext(NoteWindowContext)
    const {searchValue}=useContext(SearchContext)
    GetNotes(setNotesList,setFilterdNotes,topic_id,reload)
    FilterNotes(searchValue,NotesList,setFilterdNotes)

    return(
        <main className="container-fluid">
            <NoteMenu />
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6" id="note-title-window">
                    {displayedNoteName}
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 main_notes" >
                    {filterdNotes.length==0 ? 
                        <NoItemFound >
                            No Note Found
                        </NoItemFound>
                        :
                        <NoteItems NotesList={filterdNotes} topic_id={topic_id}/>
                    }
                    
                </div>
                <div className="col-2"></div>
            </div>
            
            <footer className='row search-bar'>
                <SearchBar />
            </footer>
            
            <NewItemModal 
                value={noteName}
                handleChange={(event)=>handleChange(event,setNoteName)} 
                handleSumbit={(event)=>handleSumbit(event,setNoteName,noteName,setReload)} 
                name={"Note"}
                />
        </main>
    )
}
export default Notes;