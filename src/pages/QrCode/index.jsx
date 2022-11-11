import './style.css'
import Menu from '../../components/Menu'
import { FaCamera } from "react-icons/fa";

export default function QrCode() {
  return (
    <>
      <Menu />
      <h2 className='qrcode_title'>Escaneie o <span>QR Code</span> ou<br /> digite o <span>Serial</span> e tenha acesso <br />  a sua bike</h2>
      <div className="qrcode_row">
        <div className="main_code">
          <form action="#">
            <div className="title_code">Insira o Serial </div>
            <div className="qrcode_box underline">
              <input type="text" placeholder="1234567891011121314" required />
              <div className="underline"></div>
            </div>
            <button className='button_qrcode'>Ler Serial</button>
            <p className='paragraph_qrcode'>----------------ou----------------  <br />Escaneiei o código QR</p> <br />
            <input type="file" id='file_input' />
            <label htmlFor="file_input"><FaCamera className='camera_icon' />Escanear QR Code</label>
          </form>
        </div>
      </div>
    </>
  )
}