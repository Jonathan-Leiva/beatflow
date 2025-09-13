import React, { useMemo } from 'react'
import TrackTile from '../components/TrackTile'

const ALL = [
  { id: 'rb-ma', title: 'Mujer Amante', artist: 'Rata Blanca', src: '/audio/rata-blanca-mujer-amante.mp3' },
  { id: 'cd',    title: 'Corazón Duro',  artist: 'Artista Desconocido', src: '/audio/corazon-duro.mp3' },
  { id: 'lt-vd', title: 'Volveré de mi Viaje', artist: 'Los Temerarios', src: '/audio/los-temerarios-volvere.mp3' },
]

const KEY = 'bf:favs'

export default function Favorites(){
  const favSet = useMemo(() => {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')) } catch { return new Set() }
  }, [])

  const list = ALL.filter(x => favSet.has(x.id))

  const toggle = (item) => {
    const next = new Set(favSet)
    if (next.has(item.id)) next.delete(item.id); else next.add(item.id)
    localStorage.setItem(KEY, JSON.stringify(Array.from(next)))
    // refresco simple:
    window.location.reload()
  }

  return (
    <section className="bf-section">
      <h2>Favoritos</h2>
      {list.length === 0 ? <p>No tienes favoritos aún.</p> : (
        <div className="bf-grid">
          {list.map(s => (
            <TrackTile key={s.id} item={s} saved={true} onToggle={toggle} />
          ))}
        </div>
      )}
    </section>
  )
}