import './style.css'
import produto16 from '../../assets/img/produto16.png'
import produto17 from '../../assets/img/produto17.png'
import produto18 from '../../assets/img/produto18.png'
import produto19 from '../../assets/img/produto19.png'
import produto20 from '../../assets/img/produto20.png'
import produto21 from '../../assets/img/produto21.png'
import produto22 from '../../assets/img/produto22.png'
import { Roupas } from '../../components/Roupas'

export default function ModaInfantil() {

  const roupas = [
    {
      src: produto16,
      titulo: 'MACACÃO INFANTIL EM MOLETOM COM ESTAMPA DE BICHINHOS - TAM 0 A 18 MESES AZUL',
      preco: '59,90'
    },
    {
      src: produto17,
      titulo: 'BLUSA INFANTIL TEXTURIZADA COM ESTAMPA DE CORAÇÕES - TAM 5 A 14 ANOS SNOW WHITE',
      preco: '69,90'
    },
    {
      src: produto18,
      titulo: 'VESTIDO INFANTIL COM ESTAMPA LISTRINHAS E CORAÇÕES - TAM 0 A 18 MESES AZUL',
      preco: '139,99'
    },
    {
      src: produto19,
      titulo: 'VESTIDO INFANTIL FANTASIA DA BRANCA DE NEVE - TAM 2 A 10 ANOS AZUL',
      preco: '150,90'
    }
  ]

  const roupas2 = [
    {
      src: produto20,
      titulo: 'CONJUNTO INFANTIL COM ESTAMPA DE BICHINHOS - TAM 0 A 18 MESES LARANJA',
      preco: '69,90'
    },
    {
      src: produto21,
      titulo: 'GARRAFA COM CANUDO EM METAL COM ESTAMPA DE GIRAFA CAPACIDADE 380ML VERDE',
      preco: '59,90'
    },
    {
      src: produto22,
      titulo: 'JARDINEIRA INFANTIL EM JEANS COM PUÍDOS E BARRA DESFIADA - TAM 5 A 14 ANOS AZUL',
      preco: '119,99'
    }
  ]

  return (
    <div className="small-container">
      <h2 className="title">APOSTAS PARA OS PEQUENOS</h2>
      <div className="row">
        {roupas.map(roupa => {
          return (
            <Roupas
              src={roupa.src}
              titulo={roupa.titulo}
              preco={roupa.preco}
            />
          )
        })}
      </div>
      <h2 className="title">OPORTUNIDADES DA SEMANA</h2>
      <div className="row">
        {roupas2.map(roupa => {
          return (
            <Roupas
              src={roupa.src}
              titulo={roupa.titulo}
              preco={roupa.preco}
            />
          )
        })}
      </div>
    </div>
  )
}