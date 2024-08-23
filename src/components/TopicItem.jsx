import { memo } from "react";
import { DeleteBtn,EditBtn } from "./UI/SimpleButtons";
import { handleTopicButtons,handleChange } from "../hooks/TopicsHooks";
import { useContext ,useState} from "react";
import { ReloaderContext } from "../contexts/ReloaderContext";
import {truncateString} from '../helpers/utils'
import DeleteTopicModal from "./Modals/DeleteTopicModal";
import EditTopicModal from "./Modals/EditTopicModal";
import './styles/TopicItem.scss'


function TopicItem({id,name,count,handler})
{
    const[itemName,setItemName]=useState(name)
    const {setReload}=useContext(ReloaderContext)
    return(
        <div className="topic mb-5">
            <div className='topic-item' id={id} onClick={handler}>
                <div className='topic-item__header'>
                    <div className='d-none d-sm-block'>{name}</div>
                    <span className='d-block d-sm-none'>
                        {truncateString(name,20)}
                    </span>
                </div>
                <div className='topic-item__body'>
                    <div className='info'>
                        <div className='mx-2'><h2>{count} Notes</h2></div>
                        <span className="fa fa-book" aria-hidden="true"></span>
                    </div>
                </div>
            </div>
            
            <div className='tools' id={id}>
                <EditBtn 
                    id={"edit-btn"} 
                    dataBsToggle={"modal"} 
                    dataBsTarget={"#EditTopicModal"+id} />
                <DeleteBtn 
                    id={"delete-btn"} 
                    dataBsToggle={"modal"} 
                    dataBsTarget={"#DeleteTopicModal"+id}/>
            </div>
            <DeleteTopicModal 
                item={"Topic"}
                item_name={name} 
                item_id={id} 
                handleItemButtons={(event)=>handleTopicButtons(event,setReload,id)}/>
            <EditTopicModal 
                item_name={name} 
                item_id={id} 
                new_item_name={itemName}
                handleItemButtons={(event)=>handleTopicButtons(event,setReload,id,itemName)}
                handleChange={(event)=>handleChange(event,setItemName)}
                item={"Topic"}
                />
        </div>
        
    )
}
export default memo(TopicItem);