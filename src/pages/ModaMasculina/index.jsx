import './style.css'
import produto from '../../assets/img/produto.png'
import produto1 from '../../assets/img/produto1.png'
import produto2 from '../../assets/img/produto2.png'
import produto3 from '../../assets/img/produto3.png'
import produto4 from '../../assets/img/produto4.png'
import produto5 from '../../assets/img/produto5.png'
import produto6 from '../../assets/img/produto6.png'
import produto7 from '../../assets/img/produto7.png'
import { Roupas } from '../../components/Roupas'

export default function ModaMasculina() {
  const roupas = [
    {
      src: produto,
      titulo: 'CAMISA MANGA CURTA EM VISCOSE COM ESTAMPA FLORAL BEGE',
      preco: '99,99'
    },
    {
      src: produto1,
      titulo: 'CAMISETA MANGA CURTA EM ALGODÃO COM ESTAMPA SLOW DOWN ROSA',
      preco: '69,90'
    },
    {
      src: produto2,
      titulo: 'CALÇA JOGGER EM ALGODÃO COM AMARRAÇÃO BOLSOS PRETO',
      preco: '139,90'
    },
    {
      src: produto3,
      titulo: 'CAMISETA MANGA LONGA COM ESTAMPA LOCALIZADA HIT THE ROAD BRANCO',
      preco: '79,90'
    },
  ]

  const roupas2 = [
    {
      src: produto4,
      titulo: 'TÊNIS EM LONA CANO MÉDIO COM ESTAMPA URSINHOS CARINHOSOS ROSA',
      preco: '159,99'
    },
    {
      src: produto5,
      titulo: 'CAMISETA EM ALGODÃO COM ESTAMPA DOG SHIBA BEWARE AZUL',
      preco: '59,99'
    },
    {
      src: produto6,
      titulo: 'PIJAMA DE FRIO MASCULINO LONGO BÁSICO VIKO CINZA E AZUL',
      preco: '79,90'
    },
    {
      src: produto7,
      titulo: 'CALÇA SKINNY JEANS COM JOELHO NAVALHADO PRETA FOSCA',
      preco: '99,90'
    }
  ]
  return (
    <div className="small-container">
      <h2 className="title">Está em alta!</h2>
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
      <h2 className="title">Peças que vale a pena investir</h2>
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