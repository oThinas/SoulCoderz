import './style.css'
import HomeImg2 from '../../assets/img/HomeImg2.png'
// import ImgKids from '../../assets/img/ImgKids.png'
// import ImgAdult from '../../assets/img/ImgAdult.jpg'
import { Carousel } from '../../components/Carousel'
export default function Home() {


  return (
    <section>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <h1>Tenha praticidade no cotidiano👋</h1>
              <h2>É para todos!</h2>
              <p class="sub-title">As bicicletas e patinetes são para todos, basta se cadastrar no site e ler o QR Code, <br /> De bike, São Paulo fica mais perto de você</p>
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
          <h2 className='title' id='start'>SELECIONE O TAMANHO <br />QUE MAIS COMBINA COM VOCÊ <br /> KIDS </h2>
          <div className='row'>
            <div className='col-3'>
              <Carousel />
              {/* <img src={ImgKids} alt='aaa' /> */}
            </div>
          </div>







          {/* <h2 className='title' id='start'>ADULTO</h2> */}
          {/* <div className='row'>
            <div className='col-3'> */}
          {/* <img src={Img1} alt='aaa' /> */}
          {/* </div> */}
          {/* </div> */}

        </div>
      </div >
    </section >
  )
}



