import { Link } from 'react-router-dom'
import './style.css'

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/logout'>Ler QR Code</Link></li>
          <li><Link to='/logout'>Criar Ponto</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
      </nav>
    </header>
  )
}

