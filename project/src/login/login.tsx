import React, { useState, FormEvent } from 'react';
import logo from '../images/f1-logo-2.jpg';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validateCredentials = () => {
    const accountCreated = localStorage.getItem('accountCreated');
    
    if (!accountCreated) {
      setErrorMessage('Debes crear una cuenta en SignUp antes de iniciar sesión.');
      return false;
    }
  
    const savedEmail = localStorage.getItem('username') || '';
    const savedPassword = localStorage.getItem('password') || '';
  
    if (!email.endsWith('@gmail.com')) {
      setErrorMessage('El correo electrónico debe terminar en "@gmail.com"');
      return false;
    }
  
    if (email.trim() !== savedEmail.trim() || password.trim() !== savedPassword.trim()) {
      setErrorMessage('Credenciales incorrectas. Introduce el correo y la contraseña correctos.');
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (validateCredentials()) {
      window.location.href = '/main';
    }
  };

  const handleLoginClick = () => {
    if (validateCredentials()) {
      window.location.href = '/main';
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>

      <form className='Login-body' onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        <label>Password</label>
        <input
          type="password"
          className='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br>
        {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
        <button
          type="button"
          className="Login-button"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <br></br>
        <button
          className="SignUp-button"
          onClick={() => {
            window.location.href = '/signup';
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
