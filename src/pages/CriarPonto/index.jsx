import Menu from '../../components/Menu'
import Point from '../../components/Point'
import { useEffect } from "react"
import './style.css'
import { HiOutlineZoomIn } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";


export default function CriarPonto() {

  const user = {
    login: "enzo",
    senha: "12345"
  }

  useEffect(() => {
    console.log(user);
    if (!user) {
      window.location = "/login"
    }
  }, [])

  return (
    <>
      {
        user && (
          <>
            <Menu />
            <h2 className='point_title'>Adicionar ponto</h2>
            <div className="input_box_point underline">
              <div>
                <HiOutlineZoomIn className='magnifying_glass_icon' size={22} />
                <input type="text" placeholder="Insira o endereço completo" required />
                <button className='button_point'>Adicionar</button>
              </div>


              <div className="underline"></div>
            </div>
            <h2 className='point_title'>Pesquisar pontos</h2>
            <div className="input_box_point underline">
              <div>
                <CgSearch className='magnifying_glass_icon' size={22} />
                <input type="text" placeholder="Insira o endereço completo" required />
                <button className='button_point'>Pesquisar</button>
              </div>
              <div className="underline"></div>
            </div>
            <div className="point_list">
              <Point address="Rua Vitorino Carmilo, 484" amountKids="4 bikes" amountAdult="2 bikes" />
              <Point address="Rua Clélia, 500" amountKids="0 bikes" amountAdult="1 bikes" />
              <Point address="Avenida Ana Costa, 1323" amountKids="3 bikes" amountAdult="6 bikes" />
            </div>
          </>
        )}
    </>
  )
}

