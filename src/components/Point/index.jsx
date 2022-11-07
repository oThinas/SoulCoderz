import './style.css'

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
        <button className='add_bike'>Adicionar bike</button>
      </div>
      <div className='button_bike_edit'>
        <button className='edit_bike'>Editar</button>
      </div>
      <div className="button_bike_remove">
        <button className='remove_bike'>Remover</button>
      </div>
    </div>
  )
}