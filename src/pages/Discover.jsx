import React, { useEffect, useState } from 'react'
import TrackTile from '../components/TrackTile'

// Ajusta estas rutas a tus archivos locales o URLs:
const SONGS = [
  { id: 'rb-ma', title: 'Mujer Amante', artist: 'Rata Blanca', src: '/audio/rata-blanca-mujer-amante.mp3' },
  { id: 'cd',    title: 'Corazón Duro',  artist: 'Artista Desconocido', src: '/audio/corazon-duro.mp3' },
  { id: 'lt-vd', title: 'Volveré de mi Viaje', artist: 'Los Temerarios', src: '/audio/los-temerarios-volvere.mp3' },
]

const KEY = 'bf:favs'

export default function Discover(){
  const [favs, setFavs] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')) } catch { return new Set() }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(Array.from(favs)))
  }, [favs])

  const toggleFav = (item) => {
    setFavs(prev => {
      const next = new Set(prev)
      next.has(item.id) ? next.delete(item.id) : next.add(item.id)
      return next
    })
  }

  return (
    <section className="bf-section">
      <h2>Descubrir</h2>
      <div className="bf-grid">
        {SONGS.map(s => (
          <TrackTile
            key={s.id}
            item={s}
            saved={favs.has(s.id)}
            onToggle={toggleFav}
          />
        ))}
      </div>
    </section>
  )
}