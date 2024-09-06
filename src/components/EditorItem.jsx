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
            {...props.provided.dragHandleProps}>
            {editMode ? 
                <div className="text-item__input mb-1">
                    <textarea onKeyDown={handleDispalyMode} value={EditText} onChange={handleChange}></textarea>
                </div>
                :
                <div className="text-item__display mb-1">
                    <div className="header">
                        <span onClick={handleEditMode}>
                            <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                        </span>
                    </div>
                    <div className="body">
                        {DispalyText}
                    </div>
                </div>
            }
        </div>
    )
}
function HeadingItem(props)
{
    const [editMode,setEditMode]=useState(true);
    const [EditText,setEditText]=useState("")
    const [DispalyText,setDispalyText]=useState()
    let H1 = /(?=> |^)[\*]{1}(\s)/;
    let H2 = /(?=> |^)[\*]{2}(\s)/;
    let H3 = /(?=> |^)[\*]{3}(\s)/;
    const handleDispalyMode = (event)=>{
        if(event.key=="Enter")
        {
            if(!event.shiftKey){
                const lines = EditText.split("\n")
                console.log(1)
                setDispalyText(lines.map((item,index)=>{
                    if(H1.test(item))
                    {
                        console.log(1)
                        return(
                            <h1 key={index}>{item.replace(H1,'')}</h1>
                        )    
                    }
                    if(H2.test(item))
                    {
                        console.log(2)
                        return(
                            <h3 key={index}>{item.replace(H2,'')}</h3>
                        )    
                    }
                    if(H3.test(item))
                    {
                        console.log(3)
                        return(
                            <h5 key={index}>{item.replace(H3,'')}</h5>
                        )    
                    }
                }))
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
            className="item heading-item" 
            id={props.id} 
            ref={props.provided.innerRef}
            {...props.provided.draggableProps}
            {...props.provided.dragHandleProps}>
            {editMode ? 
                <div className="heading-item__input mb-1">
                    <textarea onKeyDown={handleDispalyMode} value={EditText} onChange={handleChange}></textarea>
                </div>
                :
                <div className="heading-item__display mb-1">
                    <div className="header">
                        <span onClick={handleEditMode}>
                            <FontAwesomeIcon icon={faPenToSquare} size="lg"/>
                        </span>
                    </div>
                    <div className="body">
                        {DispalyText}
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
    else if(props.type=="heading")
    {
        return(
            <HeadingItem id={props.id} provided={props.provided}/>
        )
    }
}
export default EditorIteM