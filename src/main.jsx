import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Topics from './pages/Topics'
import Notes from './pages/Notes'
import ReloaderContextProvider from './contexts/ReloaderContext'
import NoteWindowContextProvider from './contexts/NoteWindowContext'
import SearchContextProvider from './contexts/SearchContext'
import './index.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Router>
                <SearchContextProvider>
                    <NoteWindowContextProvider>
                        <ReloaderContextProvider>
                            <Routes>
                                <Route path='/' element={<Topics />}/>
                                <Route path='/notes/:topic_id' element={<Notes />}/>
                            </Routes>
                        </ReloaderContextProvider>
                    </NoteWindowContextProvider>
                </SearchContextProvider>
            </Router>
    </StrictMode>
)
