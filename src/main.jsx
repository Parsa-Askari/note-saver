import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Topics from './pages/Topics'
import MenuContextProvider from './contexts/MenuContexts'
import './index.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Router>
                <MenuContextProvider>
                    <Routes>
                        <Route path='/' element={<Topics />}/>
                    </Routes>
                </MenuContextProvider>
            </Router>
    </StrictMode>
)
