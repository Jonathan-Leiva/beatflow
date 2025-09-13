import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Topbar(){
const { pathname } = useLocation()
const on = (p) => pathname === p ? 'on' : ''
return (
<header className="bf-topbar">
<div className="bf-container bf-topbar-inner">
<Link to="/" className="bf-brand">BeatFlow</Link>
<nav className="bf-nav">
<Link className={on('/')} to="/">Inicio</Link>
<Link className={on('/discover')} to="/discover">Descubrir</Link>
<Link className={on('/favorites')} to="/favorites">Favoritos</Link>
<Link className={on('/join')} to="/join">Unirse</Link>
</nav>
</div>
</header>
)
}