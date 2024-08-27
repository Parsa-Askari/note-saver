import { StrictMode ,useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route,BrowserRouter as Router ,useLocation ,useParams} from 'react-router-dom'
import Topics from './pages/Topics'
import Notes from './pages/Notes'
import Editor from './pages/Editor'
import ReloaderContextProvider from './contexts/ReloaderContext'
import NoteWindowContextProvider from './contexts/NoteWindowContext'
import SearchContextProvider from './contexts/SearchContext'
import './index.scss'
function BackgroundChanger() {
    useEffect(() => {
        document.body.style.backgroundColor = "#070026"; // MistyRose
    },[])
}
createRoot(document.getElementById('root')).render(
    // <StrictMode>
            <Router>
                <SearchContextProvider>
                    <NoteWindowContextProvider>
                        <ReloaderContextProvider>
                            <BackgroundChanger />
                            <Routes>
                                <Route path='/' element={<Topics />}/>
                                <Route path='/notes/:topic_id' element={<Notes />}/>
                                <Route path='/notes/:topic_id/:note_id' element={<Editor />}/>
                            </Routes>
                        </ReloaderContextProvider>
                    </NoteWindowContextProvider>
                </SearchContextProvider>
            </Router>
    // {/* </StrictMode> */}
)
