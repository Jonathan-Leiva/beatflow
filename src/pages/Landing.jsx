import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <section className="bf-hero">
      <h1>BeatFlow</h1>
      <p>Explora, reproduce y guarda tus pistas favoritas.</p>
      <div className="bf-row bf-gap">
        <Link className="bf-btn bf-btn-solid" to="/discover">Descubrir</Link>
        <Link className="bf-btn" to="/favorites">Favoritos</Link>
      </div>
    </section>
  )
}