import './style.css'
// import Button from '../Button/Button'

export default function Registro() {
  return (
    <body className='register_body'>
      <div class="main_register">
        <form action="#">
          <div class="title_register">Registre-se</div>
          <div class="input_box underline">
            <input type="text" placeholder="Insira seu nome" required />
            <div class="underline"></div>
          </div>
          <div class="input_box underline">
            <input type="text" placeholder="Insira seu usuário" required />
            <div class="underline"></div>
          </div>
          <div class="input_box underline">
            <input type="email" placeholder="Insira seu email" required />
            <div class="underline"></div>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Insira sua senha" required />
            <div class="underline"></div>
          </div>
          <button className='button_register'>Entrar</button>
          <a href="/login"><p className='paragraph_register'>Já possui conta? <br /> Clique aqui para fazer login</p></a>
        </form>
      </div>
    </body>
  )
}