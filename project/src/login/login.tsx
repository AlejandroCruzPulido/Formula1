import logo from '../images/f1-logo-2.jpg';
import './login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>

      <div className='Login-body'>
        <label>Email</label>
        <textarea className='Email'></textarea>
        <p></p>
        <label>Password</label>
        <textarea className='Password'></textarea>
      </div>

      <footer className='Login-footer'>
      <a
          className="Login-link"
          href="/main"
          rel="noopener noreferrer"
        >
          Login
        </a>
        <a
          className="SignUp-link"
          href='/signup'
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </footer>
    </div>
  );
}

export default Login;
