import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Join(){
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    localStorage.setItem('bf:user', JSON.stringify(data))
    navigate('/welcome')
  }

  return (
    <section className="bf-section">
      <h2>Unirse</h2>
      <form className="bf-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Nombre
          <input {...register('name', { required: 'Requerido', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })} />
          {errors.name && <span className="bf-error">{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input type="email" {...register('email', {
            required: 'Requerido',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }
          })} />
          {errors.email && <span className="bf-error">{errors.email.message}</span>}
        </label>
        <button className="bf-btn bf-btn-solid" type="submit">Crear cuenta</button>
      </form>
    </section>
  )
}