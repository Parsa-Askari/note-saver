import Header from '../containers/Header';
import { memo } from 'react';
import { useState ,useContext} from 'react';
import { handleTopicClicks,GetTopics,handleChange,handleSumbit } from '../hooks/TopicsHooks';
import { useNavigate } from 'react-router-dom';
import { ReloaderContext } from '../contexts/ReloaderContext';
import MainMenuBtn from '../components/UI/MainMenuBtn';
import NoTopics from '../components/UI/NoTopics';
import SearchBar from '../components/UI/SeachBar';
import TopicItem from '../components/TopicsComponents/TopicItem';
import NewItemModal from '../components/Modals/NewItemModal';
import "./styles/Topics.scss"
import './styles/scrollbars.scss'
function TopicMenu()
{
    const items=[
                {"text":"Export","id":"export","class":"col justify-content-center",
                    "data-bs-toggle":"","data-bs-target":""
                },
                
                {"text":"Add New Topic","id":"Add","class":"col justify-content-center",
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
function TopicItems({topicsList})
{
    const nav=useNavigate();
    return(
        <>
            <div className='col-2 col-lg-3'></div>
            <div 
                className='topic-items topic-scrollbar col-8 col-lg-6'>
                {topicsList.map((item,index)=><TopicItem 
                                                key={index}
                                                handler={(event)=>handleTopicClicks(event,nav)}
                                                name={item['topics_name']} 
                                                id={item['topics_id']}
                                                count={item['topics_note_count']}/>)}
                
            </div>
            <div className='col-2 col-lg-3'></div>
        </>

    )
}
function Topics()
{
    const[topicsList,setTopicsList]=useState([]);
    const[topicName,setTopicName]=useState("");
    const {reload,setReload}=useContext(ReloaderContext)
    GetTopics(setTopicsList,reload);
    return(
        <div className="container-fluid" id='topics-container'>
            <TopicMenu />
            <main className='row topics-main'>
                {topicsList.length ==0 ? 
                    <NoTopics /> 
                        : 
                    <TopicItems topicsList={topicsList} />
                }
               
            </main>
            <footer className='row search-bar'>
                <SearchBar />
            </footer>
            <NewItemModal 
                value={topicName}
                handleChange={(event)=>handleChange(event,setTopicName)} 
                handleSumbit={(event)=>handleSumbit(event,setTopicName,topicName,setReload)} 
                name={"Topic"}
                />
        </div>
    )
}
export default memo(Topics);