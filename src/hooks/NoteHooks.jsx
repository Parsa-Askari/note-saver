import { useEffect } from "react";
import { toast } from "../components/UI/Alerts";
const handleChange = (event,setNoteName)=>{
    const value=event.target.value;
    setNoteName(value)
}
const handleSumbit = async(event,setNoteName,topic_id,noteName,setReload)=>{
    event.preventDefault()
    try{
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
export {handleChange,handleSumbit}