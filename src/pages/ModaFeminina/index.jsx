import './style.css'
import produto8 from '../../assets/img/produto8.png'
import produto9 from '../../assets/img/produto9.png'
import produto10 from '../../assets/img/produto10.png'
import produto11 from '../../assets/img/produto11.png'
import produto12 from '../../assets/img/produto12.png'
import produto13 from '../../assets/img/produto13.png'
import produto14 from '../../assets/img/produto14.png'
import produto15 from '../../assets/img/produto15.png'
import { Roupas } from '../../components/Roupas'

export default function ModaFeminina() {

  const roupas = [
    {
      src: produto8,
      titulo: 'CASACO CROPPED EM VISCOSE CANELADA COM MANGA LONGA VERDE',
      preco: '79,90'
    },
    {
      src: produto9,
      titulo: 'VESTIDO NEW MIDI EM RIBANA COM DECOTE TORCIDO E MANGA LONGA LARANJA',
      preco: '139,90'
    },
    {
      src: produto10,
      titulo: 'BLUSA CURTA EM ALGODÃO COM DETALHE TEXTURIZADO PRETO',
      preco: '89,99'
    },
    {
      src: produto11,
      titulo: 'KIMONO DE MANGA AMPLA COM AVIAMENTO E ESTAMPA COQUEIROS',
      preco: '239,90'
    },
  ]

  const roupas2 = [
    {
      src: produto12,
      titulo: 'CASACO CURTO EM TRICÔ JACQUARD COM MANGA BUFANTE ESTAMPA FLORAL ROSA',
      preco: '159,90'
    },
    {
      src: produto13,
      titulo: 'CALÇA PANTACOURT EM SARJA COM PENCE E ESTAMPA SILK INTERNA BRANCO',
      preco: '119,99'
    },
    {
      src: produto14,
      titulo: 'BLUSA REGATA CURTA EM TRICÔ CANELADO COM DECOTE V BRANCO',
      preco: '139,99'
    },
    {
      src: produto15,
      titulo: 'BLUSA EM VISCOSE COM MANGA 3/4 E BORDADOS DE FLORES BRANCO',
      preco: '99,90'
    }
  ]

  return (
    <div className="small-container">
      <h2 className="title">TUDO PRO SEU ESTILO</h2>
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

      <h2 className="title">OS QUERIDINHOS DO MOMENTO</h2>
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