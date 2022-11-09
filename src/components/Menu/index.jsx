import { Link } from 'react-router-dom'
import './style.css'

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado")
    window.location = "/"
  }

  const usuario = sessionStorage.getItem("usuario-validado")
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/CriarPonto'>Criar Ponto</Link></li>
          <li><Link to='/qrcode'>Ler QR Code</Link></li>

          {/* <li onClick={logout}><Link to='/logout'>{usuario}Ler QR Code</Link></li> */}
        </ul>
      </nav>
    </header>
  )
}

