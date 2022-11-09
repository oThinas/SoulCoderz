import './style.css'
import { CgAdd } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

export default function Point() {
  return (
    <div className="point">
      <div className="address">
        <p>Rua Vitorino Carmilo, 484</p>
      </div>
      <div className="avaiableCount">
        <h5>Bikes disponiveis</h5>
        <p>Kids: 4 bikes</p>
        <p>Adulto: 2 bikes</p>
      </div>
      <div className="Size">
        <h5>Tamanho</h5>
        <input type="radio" name="type" value="kids" />
        <label htmlFor="kids">Kids</label> <br />
        <input type="radio" name="type" value="adulto" />
        <label htmlFor="adulto">Adulto</label>
      </div>
      <div className="button_bike_add">
        <button className='add_bike'>Adicionar bike
          <CgAdd size={20} className='button_icons' />
        </button>
      </div>
      <div className='button_bike_edit'>
        <button className='edit_bike'>Editar
          <FaPen size={16} className='button_icons' />
        </button>
      </div>
      <div className="button_bike_remove">
        <button className='remove_bike'>Remover
          <FaRegTimesCircle className='button_icons' size={18} />
        </button>
      </div>
    </div>
  )
}