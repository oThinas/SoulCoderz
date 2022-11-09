import './style.css'
import Menu from '../../components/Menu'
export default function QrCode() {
  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
      <Menu />
      <h2 className='qrcode_title'>Escaneie o <span>QR Code</span> ou<br /> digite o <span>Serial</span> e tenha acesso <br />  a sua bike</h2>
      <div className="qrcode_row">
        <div class="main_code">
          <form action="#">
            <div class="title_code">Insira o serial </div>
            <div class="qrcode_box underline">
              <input type="text" placeholder="1234567891011121314" required />
              <div class="underline"></div>
            </div>
            <button className='button_qrcode'>Ler</button>
            <p className='paragraph_qrcode'>----------------ou----------------  <br />Escaneiei o código QR</p> <br />
            <input type="file" id='file_input' />
            <label htmlFor="file_input"><i class="fa-regular fa-camera"></i>Escanear QR Code</label>
          </form>
        </div>
      </div>
    </>
  )
}