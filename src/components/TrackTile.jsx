import React, { useEffect, useRef, useState } from 'react'

export default function TrackTile({ item, saved = false, onToggle }){
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    playing ? el.play().catch(()=>setPlaying(false)) : el.pause()
  }, [playing])

  return (
    <div className={`bf-card ${saved ? 'bf-card-saved' : ''}`}>
      <div className="bf-card-meta">
        <div className="bf-title">{item.title}</div>
        <div className="bf-artist">{item.artist}</div>
      </div>

      <div className="bf-card-actions">
        <button className="bf-btn" onClick={() => setPlaying(p => !p)}>
          {playing ? 'Pausar' : 'Reproducir'}
        </button>
        <button className="bf-btn bf-btn-outline" onClick={() => onToggle?.(item)}>
          {saved ? 'Quitar' : 'Favorito'}
        </button>
      </div>

      {/* Usa rutas locales o URLs absolutas a tus MP3 */}
      <audio ref={audioRef} src={item.src} preload="metadata" />
    </div>
  )
}