import Button from '../Button/Button'
import './style.css'

export default function Login() {
  return (
    <body className='login_body'>
      <div class="main_login">
        <form action="#">
          <div class="title_login">Login</div>
          <div class="input-box underline">
            {/* <label htmlFor="">Email</label> <br /> */}
            <input type="text" placeholder="Enter Your Email" required />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Enter Your Password" required />
            <div class="underline"></div>
          </div>
          <Button />
          {/* <div class="input-box button">
        </div> */}
        </form>
      </div>
    </body>
  )
}