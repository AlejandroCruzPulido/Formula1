import React, { useState } from 'react';
import logo from '../images/f1-logo-2.jpg';
import './sign-up.css';

function SignUp() {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessages] = useState<string[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z]+(?:[A-Za-z]*[a-z]*)?$/.test(value) || value === '') {
      setName(value);
      localStorage.setItem('name', value);
    }
  };
  
  const handleSurNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z]+(?:[A-Za-z]*[a-z]*)?$/.test(value) || value === '') {
      setSurName(value);
      localStorage.setItem('surname', value);
    }
  };  

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: string[] = [];
  
    if (password !== repeatPassword) {
      errors.push('Las contraseñas no coinciden');
    }
  
    if (errors.length === 0) {
      localStorage.setItem('accountCreated', 'true');
      localStorage.setItem('name', name);  
      localStorage.setItem('surname', surName);  
      localStorage.setItem('username', email);
      localStorage.setItem('password', password);
      window.location.href = '/main';
    }
  };

  return (
    <div className="SignUp">
      <header className="SignUp-header">
        <img src={logo} className="SignUp-logo" alt="logo" />
      </header>

      <form className='SignUp-body' onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          className='Name'
          value={name}
          onChange={handleNameChange}
        />
        <p></p>
        <label>SurName</label>
        <input
          type="text"
          className='SurName'
          value={surName}
          onChange={handleSurNameChange}
        />
        <p></p>
        <label>Email</label>
        <input
          type="text"
          className='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <p></p>
        <label>Password</label>
        <input
          type="password"
          className='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <p></p>
        <label>Repeat Password</label>
        <input
          type="password"
          className='RepeatPassword'
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
        <p>
          {errorMessages.map((error, index) => (
            <span key={index}>{error}<br /></span>
          ))}
        </p>
        <button type="submit" className="SignUp-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
