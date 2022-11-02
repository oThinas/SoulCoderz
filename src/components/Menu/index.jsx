import { Link } from 'react-router-dom'
import './style.css'

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          {/* <li><Link to='/'>Home</Link></li>
          <li><Link to='/masculino'>Login</Link></li>
          <li><Link to='/feminina'>Cadastro</Link></li> */}
          <li><Link to='/infantil'>Login</Link></li>
          <li><Link to='/sobre'>Logout</Link></li>
        </ul>
      </nav>
    </header>
  )
}

