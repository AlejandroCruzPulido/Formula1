import { Cash, CalendarClear, Videocam, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './account.css';

function Account() {
  // Obtener los datos del localStorage
  const savedName = localStorage.getItem('name') || '';
  const savedSurname = localStorage.getItem('surname') || '';
  const savedEmail = localStorage.getItem('email') || '';
  const savedPassword = localStorage.getItem('password') || '';

  return (
    <div className="Account">
      <header className="Account-header">
        <img src={logo} className="Account-logo" alt="logo" />
      </header>

      <div className='Account-body'>
        <img src='' className='Image-account' alt=""/>

        <b>Personal Information</b>
        <form>
          <label>Name:</label>
          <input
            type="text"
            className='Name'
            value={savedName}
            readOnly // Esto evita que el usuario edite el valor directamente
          />
          <br></br>
          <label>Surname:</label>
          <input
            type="text"
            className='Surname'
            value={savedSurname}
            readOnly
          />
          <br></br>
          <label>Email:</label>
          <input
            type="text"
            className='Email'
            value={savedEmail}
            readOnly
          />
          <br></br>
          <label>Password:</label>
          <input
            type="password"
            className='Password'
            value={savedPassword}
            readOnly
          />
          <br></br>
          <a
            className="Logout-link"
            href="/login"
            rel="noopener noreferrer"
          >
            Logout
          </a>
        </form>
      </div>

      <footer className='Footer' >
        <div className='Main-footer'>
            <a href=' '>
                <Cash
                color={'#FFFFFF'}
                height="2em"
                />
            </a>
            <a href='/calendar'>
                <CalendarClear
                color={'#FFFFFF'}
                />
            </a>
            <a href=' '>
                <Videocam
                color={'#FFFFFF'}
                />
            </a>
            <a href='/main'>
                <Car
                color={'#FFFFFF'}
                />
            </a>
        </div>
      </footer>
    </div>
  );
}

export default Account;
