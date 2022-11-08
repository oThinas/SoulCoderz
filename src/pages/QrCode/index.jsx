import './style.css'
import Menu from '../../components/Menu'

export default function QrCode() {
  return (
    <body>
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
            <button className='button_login'>Ler</button>
            <p className='paragraph_qrcode'>----------------ou----------------  <br /> Escaneiei o código QR</p> <br />
            <input type="file" capture tyle="display:none;" />
          </form>
        </div>
      </div>

    </body>
  )
}