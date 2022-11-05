import './style.css'
import Button from '../Button/Button'

export default function Login() {
  return (
    <body className='login_body'>
      <div class="main_login">
        <form action="#">
          <div class="title_login">Login</div>
          <div class="input_box underline">
            <input type="text" placeholder="Insira seu Email" required />
            <div class="underline"></div>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Insira sua Senha" required />
            <div class="underline"></div>
          </div>
          <Button />
          <p className='login_paragraph'>Ainda não possui conta? <br /> Clique aqui e registre-se</p>
        </form>
      </div>
    </body>
  )
}