import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Landing from './pages/Landing'
import Discover from './pages/Discover'
import Favorites from './pages/Favorites'
import Join from './pages/Join'
import Welcome from './pages/Welcome'



export default function App(){
return (
<div className="bf-app">
<Topbar />
<main className="bf-container">
<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/discover" element={<Discover/>} />
<Route path="/favorites" element={<Favorites/>} />
<Route path="/join" element={<Join/>} />
<Route path="/welcome" element={<Welcome/>} />
<Route path="*" element={<Landing/>} />
</Routes>
</main>
<footer className="bf-footer">BeatFlow © {new Date().getFullYear()}</footer>
</div>
)
}