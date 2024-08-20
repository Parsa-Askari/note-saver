import Notopics from '../components/UI/NoTopics'
import Header from '../containers/Header';
import { memo } from 'react';
import MainMenuBtn from '../components/UI/MainMenuBtn';
import NoTopics from '../components/UI/NoTopics';
import SearchBar from '../components/UI/SeachBar';
import "./styles/Topics.scss"
function TopicMenu()
{
    const items=[
                {"text":"Export","id":"export","class":"col justify-content-center"},
                {"text":"Add New Topic","id":"Add","class":"col justify-content-center"},
                {"text":"Import","id":"import","class":"col justify-content-center"}]
    return(
        <Header >
            {items.map((item,index)=><MainMenuBtn 
                                        key={index}
                                        btnClass={item['class']} 
                                        optionText={item['text']} 
                                        id={item['id']}
                                        />)}

        </Header>
    )
}

function Topics()
{

    return(
        <div className="container-fluid" id='topics-container'>
            <TopicMenu />
            <main className='row topics-main'>
                <NoTopics />
            </main>
            <footer className='row search-bar'>
                <SearchBar />
            </footer>
        </div>
    )
}
export default memo(Topics);