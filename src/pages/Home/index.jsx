import './style.css'
import HomeImg2 from '../../assets/img/HomeImg2.png'
import HomeImg3 from '../../assets/img/HomeImg3.png'
import { Carousel } from '../../components/Carousel'
export default function Home() {

  return (
    <section>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <h1>Tenha <span>praticidade</span> no cotidiano👋</h1>
              <h2 className='title'>É para todos!</h2>
              <p class="main_info">As bicicletas e patinetes são para todos, basta se cadastrar no site e ler o QR Code, <br /> De bike, São Paulo fica mais perto de você</p>
              <a href="#start" class="button">Veja Mais! &#8594;</a>
            </div>
            <div class="col-2">
              <img src={HomeImg2} alt="Imagem da página home" />
            </div>
          </div>
        </div>
      </div>
      <div className='categories'>
        <div className='small-container'>
          <h2 className='sub-title'>Selecione o tamanho<br />que mais <span>combina com você</span></h2>
          <p class="info">KIDS OU ADULTO</p>
          <Carousel />
          <h2 className='sub-title'>Libere sua bike em <br /><span>apenas 3 passos</span></h2>
          <h3 className='sub-title'>1. Cadastre-se na plataforma <br /> 2. Aponte sua câmera para o QRCode presente em nossos pontos <br /> 3. Pronto. Sua bike está liberada e pronto para uso</h3>
          <div className='row'>
            <div className='col-3'>
              <img src={HomeImg3} alt='Imagem de uma criança andando de bicicleta' />
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}



