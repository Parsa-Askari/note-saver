import { memo } from "react";
import { DeleteBtn,EditBtn } from "./UI/SimpleButtons";
import { handleNoteButtons,handleChange } from "../hooks/NoteHooks";
import { useContext,useState } from "react";
import { NoteWindowContext } from "../contexts/NoteWindowContext";
import { ReloaderContext } from "../contexts/ReloaderContext";
import {truncateString} from '../helpers/utils'
import DeleteTopicModal from "./Modals/DeleteTopicModal";
import EditTopicModal from "./Modals/EditTopicModal";
import "./styles/NoteItem.scss"
function NoteItem({note_id,note_name})
{
    const{handleWindowDisplay}=useContext(NoteWindowContext)
    const[itemName,setItemName]=useState(note_name)
    const {setReload}=useContext(ReloaderContext)
    return(
        <div className="note" id={note_id} name={note_name} onMouseOver={handleWindowDisplay} >
            <div className="note__body" >
                {truncateString(note_name,10)}
            </div>
            <div className="note__tools">
                <EditBtn 
                    id={"edit-btn"} 
                    dataBsToggle={"modal"} 
                    dataBsTarget={"#EditTopicModal"+note_id} />
                <DeleteBtn 
                    id={"delete-btn"} 
                    dataBsToggle={"modal"} 
                    dataBsTarget={"#DeleteTopicModal"+note_id}/>
            </div>
            <DeleteTopicModal 
                item={"Note"}
                item_name={note_name} 
                item_id={note_id} 
                handleItemButtons={(event)=>handleNoteButtons(event,setReload,note_id)}/>
            <EditTopicModal 
                item={"Note"}
                item_name={note_name} 
                item_id={note_id} 
                new_item_name={itemName}
                handleItemButtons={(event)=>handleNoteButtons(event,setReload,note_id,itemName)}
                handleChange={(event)=>handleChange(event,setItemName)}/>
        </div>
        

    )
}
export default memo(NoteItem);