import { useEffect } from "react";
import { toast } from "../components/UI/Alerts";

function GetNotes(setNotesList,topic_id,reload)
{
    
    useEffect(()=>{
        const func = async()=>{
            try{
                const res=await fetch("http://localhost/note-saver-server/GetNotes.php",{
                    method:"POST",
                    credentials:"include",
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({"topic-id":topic_id})
                });
                const notesList = await res.json();
                setNotesList(notesList);
                localStorage.setItem('topic_id', topic_id);
            }catch(error)
            {
                console.log(error)
            }
        }
        func();
    },[reload])
}

const handleChange = (event,setNoteName)=>{
    const value=event.target.value;
    setNoteName(value)
}
const handleNoteButtons =async (event,setReload,note_id,note_name=null)=>{
    event.stopPropagation();
    const id=event.target.closest('.btn').id
    if(id=="delete-item")
    {
        try{
            const topic_id=localStorage.getItem('topic_id');
            const res=await fetch("http://localhost/note-saver-server/DeleteNote.php",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"note-id":note_id,'topic-id':topic_id})
            })
            const response=await res.json();
            toast(response['type'],response['title'],response['msg'])
            setReload((prev)=>!prev)
            
        }catch(error)
        {
            console.log(error)
        }
    }
    else if(id=="edit-item")
    {
        try{
            const res=await fetch("http://localhost/note-saver-server/EditNote.php",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"note-id":note_id,"note-name":note_name})
            })
            const response=await res.json();
            toast(response['type'],response['title'],response['msg'])
            setReload((prev)=>!prev)
            
        }catch(error)
        {
            console.log(error)
        }
    }
}
const handleSumbit = async(event,setNoteName,noteName,setReload)=>{
    event.preventDefault()
    try{
        const topic_id=localStorage.getItem("topic_id");
        const res=await fetch("http://localhost/note-saver-server/AddNewNote.php",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"topic-id":topic_id,"note-name":noteName})
        })
        console.log("hi")
        const response=await res.json();
        toast(response['type'],response['title'],response['msg'])
        setReload((prev)=>!prev)
        setNoteName("")
    }catch(error)
    {
        console.log(error)
    }
}
export {handleChange,handleSumbit,GetNotes,handleNoteButtons}