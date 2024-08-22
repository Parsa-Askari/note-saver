import { useParams } from "react-router-dom";
import { useState,useContext } from "react";
import { ReloaderContext } from "../contexts/ReloaderContext";
import { handleChange,handleSumbit } from "../hooks/NoteHooks";
import NewItemModal from "../components/Modals/NewItemModal";
import Header from "../containers/Header";
import MainMenuBtn from "../components/UI/MainMenuBtn";
import "./styles/Notes.scss"
function TopicMenu()
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
function Notes()
{
    const {topic_id}=useParams();
    const[topicsList,setTopicsList]=useState([]);
    const[noteName,setNoteName]=useState("");
    const {reload,setReload}=useContext(ReloaderContext)
    return(
        <main className="container-fluid">
            <TopicMenu />
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6" id="note-title-window">

                </div>
                <div className="col-3"></div>
            </div>
            <NewItemModal 
                value={noteName}
                handleChange={(event)=>handleChange(event,setNoteName)} 
                handleSumbit={(event)=>handleSumbit(event,setNoteName,topic_id,noteName,setReload)} 
                name={"Note"}
                />
        </main>
    )
}
export default Notes;