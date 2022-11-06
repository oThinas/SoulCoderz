import Menu from '../../components/Menu'
import Point from '../../components/Point'
import './style.css'


export default function CriarPonto() {
  return (
    <>
      <Menu />
      <h2 className='point_title'>Adicionar ponto</h2>
      <div class="input_box_point underline">
        <input type="text" placeholder="Insira o endereço completo" required />
        <button className='button_point'>Adicionar</button>
        <div class="underline"></div>
      </div>
      <h2 className='point_title'>Pesquisar pontos</h2>
      <div class="input_box_point underline">
        <input type="text" placeholder="Insira o endereço completo" required />
        <button className='button_point'>Pesquisar</button>
        <div class="underline"></div>
      </div>
      <div className="point_list">
        <Point />
      </div>
    </>
  )
}