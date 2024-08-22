import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Topics from './pages/Topics'
import Notes from './pages/Notes'
import ReloaderContextProvider from './contexts/ReloaderContext'
import './index.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Router>
                <ReloaderContextProvider>
                    <Routes>
                        <Route path='/' element={<Topics />}/>
                        <Route path='/notes/:topic_id' element={<Notes />}/>
                    </Routes>
                </ReloaderContextProvider>
            </Router>
    </StrictMode>
)
