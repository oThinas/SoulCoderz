import HomeImg from '../../assets/img/HomeImg.png'
import { Membros } from '../../components/Membros'
export default function Sobre() {
  const membros = [
    {
      nome: 'Enzo Trevisan',
      rm: '94745'
    },

    {
      nome: 'Karina Megumi',
      rm: '95121'
    },

    {
      nome: 'Thiago Martins',
      rm: '94426'
    },

    {
      nome: 'Vinicius Aoyagui',
      rm: '93386'
    }
  ]

  return (
    <section>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <h1>A vida é para quem tem estilo👋</h1>
              <p class="sub-title">Da nossa vitrine para o seu guarda-roupa, <br /> Descontos de até 20% na sua primeira compra</p>
              <a href="#start" class="button">Veja Mais! &#8594;</a>
            </div>
            <div class="col-2">
              <img src={HomeImg} alt="Imagem da página principal" />
            </div>
          </div>
        </div>
      </div>
      <div className='categories'>
        <div className='small-container'>
          <h2 className='title' id='start'>MEMBROS DO GRUPO:</h2>
          <div className='row'>
            {membros.map(membros => {
              return (
                <Membros
                  nome={membros.nome}
                  rm={membros.rm}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}



