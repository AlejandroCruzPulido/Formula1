   import logo from '../images/f1-logo-2.jpg';
   import './sign-up.css';
   
   function SignUp() {
     return (   
   <div className="SignUp">
      <header className="SignUp-header">
        <img src={logo} className="SignUp-logo" alt="logo" />
      </header>

      <div className='SignUp-body'>
        <label>Name</label>
        <textarea className='Name'></textarea>
        <p></p>
        <label>SurName</label>
        <textarea className='SurName'></textarea>
        <p></p>
        <label>Email</label>
        <textarea className='Email'></textarea>
        <p></p>
        <label>Password</label>
        <textarea className='Password'></textarea>
        <p></p>
        <label>Repeat Password</label>
        <textarea className='RepeatPassword'></textarea>
      </div>

      <footer className='SignUp-footer'>
        <a
          className="SignUp-link"
          href="/main"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </footer>
    </div>

  );
}
export default SignUp;
