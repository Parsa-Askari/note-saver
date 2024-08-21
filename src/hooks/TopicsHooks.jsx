import { useEffect } from "react";
import { toast } from "../components/UI/Alerts";
const handleMenuClicks=(event)=>
{
    const id = event.target.closest(".col").id
}
const handleTopicClicks=(event,nav)=>{
    
    const id=event.target.closest('.topic-item').id;
    nav("/notes/"+id)
}
const handleChange=(event,setTopicName)=>{
    const value=event.target.value;
    setTopicName(value)
}
const handleTopicButtons=async (event,setReload,topic_id)=>{
    
    event.stopPropagation();
    const id=event.target.closest('.btn').id
    if(id=="delete-topic")
    {
        try{
            const res=await fetch("http://localhost/note-saver-server/DeleteTopic.php",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"topic-id":topic_id})
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
const handleSumbit=async (event,setTopicName,topicName,setReload)=>{
    
    event.preventDefault()
    console.log(1)
    try{
        const res=await fetch("http://localhost/note-saver-server/AddNewTopic.php",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"topic-name":topicName})
        })
        const response=await res.json();
        toast(response['type'],response['title'],response['msg'])
        setReload((prev)=>!prev)
        setTopicName("")
    }catch(error)
    {
        console.log(error)
    }
}
function GetTopics(setTopicsList,reload)
{
    
    useEffect(()=>{
        const func = async()=>{
            try{
                const res=await fetch("http://localhost/note-saver-server/GetTopics.php",{
                    method:"GET",
                    credentials:"include",
                    headers:{
                        'Content-Type':'application/json',
                    },
                });
                const topicsList = await res.json();
                setTopicsList(topicsList);
            }catch(error)
            {
                console.log(error)
            }
        }
        func();
    },[reload])
}

export {handleMenuClicks,
        handleTopicClicks,
        handleTopicButtons,
        handleChange,
        handleSumbit,
        GetTopics}