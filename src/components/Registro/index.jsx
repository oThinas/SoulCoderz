import './style.css'
import { FaUserAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { api } from '../../lib/axios';
// import axios from 'axios'

export default function Registro() {

  const [name, setName] = useState('')
  const [verifiedName, setVerifiedName] = useState('')
  useEffect(() => {
    const verifiedName = name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
    setVerifiedName(verifiedName)
  }, [name])

  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(event) {
    event.preventDefault()
    const teste = await api.get(`/usuario/${login}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(teste)
    // console.log(isUserAlreadyRegister)
  }
  return (
    <body className='register_body'>
      <div className="main_register">
        <form onSubmit={event => handleRegister(event)}>
          <div className="title_register">Registre-se</div>
          <div className="input_box underline">
            <FaUserAlt size={18} />
            <input type="text" placeholder="Insira seu nome" required value={verifiedName} onChange={event => setName(event.target.value)} />
            <div className="underline"></div>
          </div>
          <div className="input_box underline">
            <FaUserCircle size={18} />
            <input type="text" placeholder="Insira seu usuário" required value={login} onChange={event => setLogin(event.target.value)} />
            <div className="underline"></div>
          </div>
          <div className="input_box underline">
            <FaRegEnvelope size={18} />
            <input type="email" placeholder="Insira seu email" required value={email} onChange={event => setEmail(event.target.value)} />
            <div className="underline"></div>
          </div>
          <div className="input_box">
            <FaLock size={18} />
            <input type="password" placeholder="Insira sua senha" required value={password} onChange={event => setPassword(event.target.value)} />
            <div className="underline"></div>
          </div>
          <input type='submit' value='Entrar' className='button_register' />
          <Link to="/login">
            <p className='paragraph_register'>Já possui conta? <br /> Clique aqui para fazer login</p>
          </Link>
        </form>
      </div>
    </body>
  )
}