import { useState } from "react"
import './style.css'

export default function Login() {

  const [user, setUser] = useState({
    login: "enzo.trev@hotmai.com",
    senha: "12345"
  })

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const logar = async (e) => {
    e.preventDefault()

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }

    const response = await fetch(
      // "url",
      requestOptions
    )
    const data = await response.json()
    if (data.login) {
      sessionStorage.setItem("Usuario-validado", data.login)
    }

    if (data) {
      window.location = "/home"
    }
  }

  return (
    <body className='login_body'>
      <div class="main_login">
        <form action="#">
          <div class="title_login">Login</div>
          <div class="input_box underline">
            <input type="text" placeholder="Insira seu email" required />
            <div class="underline"></div>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Insira sua senha" required />
            <div class="underline"></div>
          </div>
          <button className='button_login'>Entrar</button>
          <p className='paragraph_login'>Ainda não possui conta? <br /> Clique aqui e registre-se</p>
        </form>
      </div>
    </body>
  )
}