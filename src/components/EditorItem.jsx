import { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./styles/EditorItem.scss"
function TextItem(props)
{
    const [editMode,setEditMode]=useState(false);
    const [EditText,setEditText]=useState("")
    const [DispalyText,setDispalyText]=useState()
    const handleDispalyMode = (event)=>{
        if(event.key=="Enter")
        {
            if(!event.shiftKey){
                const lines = EditText.split("\n")
                console.log(1)
                setDispalyText(lines.map((item,index)=><div key={index}>{item}</div>))
                setEditMode(false)
            }
        }
    }
    const handleEditMode = (event)=>{
        setEditMode(true)
    }
    const handleChange = (event)=>{
        const value = event.target.value;
        setEditText(value)
    }
    
    return(
        <div 
            className="item text-item" 
            id={props.id} 
            ref={props.provided.innerRef}
            {...props.provided.draggableProps}
            {...props.provided.dragHandleProps}
            
            >
            {editMode ? 
                <div className="text-item__input">
                    <textarea onKeyDown={handleDispalyMode} value={EditText} onChange={handleChange}></textarea>
                </div>
                :
                <div className="text-item__display">
                    <div className="header">
                        <span onClick={handleEditMode}>
                            <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                        </span>
                    </div>
                    <div className="body">
                        {props.id}
                    </div>
                </div>
            }
        </div>
    )
}
function EditorIteM(props)
{
    if(props.type=="text")
    {
        return(
            <TextItem id={props.id} provided={props.provided}/>
        )
    }
}
export default EditorIteM