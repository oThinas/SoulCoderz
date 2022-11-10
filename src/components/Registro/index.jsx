import './style.css'
import { FaUserAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'



export default function Registro() {
  return (
    <body className='register_body'>
      <div class="main_register">
        <form action="#">
          <div class="title_register">Registre-se</div>
          <div class="input_box underline">
            <FaUserAlt size={18} />
            <input type="text" placeholder="Insira seu nome" required />
            <div class="underline"></div>
          </div>
          <div class="input_box underline">
            <FaUserCircle size={18} />
            <input type="text" placeholder="Insira seu usuário" required />
            <div class="underline"></div>
          </div>
          <div class="input_box underline">
            <FaRegEnvelope size={18} />
            <input type="email" placeholder="Insira seu email" required />
            <div class="underline"></div>
          </div>
          <div class="input_box">
            <FaLock size={18} />
            <input type="password" placeholder="Insira sua senha" required />
            <div class="underline"></div>
          </div>
          <button className='button_register'>Entrar</button>
          <Link to="/login">
            <p className='paragraph_register'>Já possui conta? <br /> Clique aqui para fazer login</p>
          </Link>
        </form>
      </div>
    </body>
  )
}