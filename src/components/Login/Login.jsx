import './style.css'
// import Button from '../Button/Button'

export default function Login() {
  return (
    <body className='login_body'>
      <div class="main_login">
        <form action="#">
          <div class="title_login">Login</div>
          <div class="input_box underline">
            <input type="text" placeholder="Insira seu email" required />
            <div class="underline"></div>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Insira sua senha" required />
            <div class="underline"></div>
          </div>
          <button className='button_login'>Entrar</button>
          <p className='paragraph_login'>Ainda não possui conta? <br /> Clique aqui e registre-se</p>
        </form>
      </div>
    </body>
  )
}