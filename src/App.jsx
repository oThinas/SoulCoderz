import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login/Login'
import Registro from './components/Registro'
import CriarPonto from './pages/CriarPonto'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrar' element={<Registro />} />
        <Route path='/criarponto' element={<CriarPonto />} />
      </Routes>
    </BrowserRouter>

  )
}