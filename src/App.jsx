import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import ModaMasculina from './pages/ModaMasculina'
import ModaFeminina from './pages/ModaFeminina'
import ModaInfantil from './pages/ModaInfantil'
import Sobre from './pages/Sobre'
import Footer from './components/Footer'

export default function App() {
  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/masculino' element={<ModaMasculina />} />
        <Route path='/feminina' element={<ModaFeminina />} />
        <Route path='/infantil' element={<ModaInfantil />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}