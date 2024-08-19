import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path='/' >
                    
                </Route>
            </Routes>
        </Router>
    </StrictMode>
)
