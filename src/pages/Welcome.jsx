import React from 'react'

export default function Welcome(){
  const user = (() => {
    try { return JSON.parse(localStorage.getItem('bf:user') || '{}') } catch { return {} }
  })()
  return (
    <section className="bf-section">
      <h2>¡Bienvenido{user?.name ? `, ${user.name}` : ''}!</h2>
      <p>Tu cuenta de BeatFlow está lista.</p>
    </section>
  )
}