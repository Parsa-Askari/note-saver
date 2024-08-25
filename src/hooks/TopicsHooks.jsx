import { useEffect } from "react";
import { toast } from "../components/UI/Alerts";
const handleTopicClicks=(event,nav,clearSearchValue)=>{
    
    const id=event.target.closest('.topic-item').id;
    clearSearchValue()
    nav("/notes/"+id)
}
const handleChange=(event,setTopicName)=>{
    
    const value=event.target.value;
    console.log(value)
    setTopicName(value)
}
const handleTopicButtons=async (event,setReload,topic_id,topic_name=null)=>{
    
    event.stopPropagation();
    const id=event.target.closest('.btn').id
    if(id=="delete-item")
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
    else if(id=="edit-item")
    {
        
        try{
            const res=await fetch("http://localhost/note-saver-server/EditTopic.php",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"topic-id":topic_id,"topic-name":topic_name})
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
function GetTopics(setTopicsList,setFilterdTopics,reload)
{
    
    useEffect(()=>{
        document.body.style.backgroundColor = "#070026";
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
                setFilterdTopics(topicsList)
            }catch(error)
            {
                console.log(error)
            }
        }
        func();
    },[reload])
}
function FilterTopics(searchValue,topicsList,setFilterdTopics)
{
    useEffect(()=>{

        const filteredTopics=topicsList.filter(item=>
            item['topics_name'].toLowerCase().includes(searchValue)
        )
        setFilterdTopics(filteredTopics)
    },[searchValue])
}
export {handleTopicClicks,
        handleTopicButtons,
        handleChange,
        handleSumbit,
        GetTopics,
        FilterTopics}