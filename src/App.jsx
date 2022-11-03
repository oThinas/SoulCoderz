import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default function App() {
  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/masculino' element={<ModaMasculina />} />
        <Route path='/feminina' element={<ModaFeminina />} />
        <Route path='/infantil' element={<ModaInfantil />} />
        <Route path='/sobre' element={<Sobre />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}