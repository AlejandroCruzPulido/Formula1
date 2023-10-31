import { Cash, CalendarClear, Videocam, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './account.css';

function Account() {
  return (
    <div className="Account">
      <header className="Account-header">
        <img src={logo} className="Account-logo" alt="logo" />
      </header>

      <div className='Account-body'>
        <img src='' className='Image-account' alt=""/>

        <b>Personal Information</b>
        <label>Name:</label>
        <textarea className='Name'></textarea>
        <br></br>
        <label>Surname:</label>
        <textarea className='Surname'></textarea>
        <br></br>
        <label>Email:</label>
        <textarea className='Email'></textarea>
        <br></br>
        <label>Password:</label>
        <textarea className='Password'></textarea>
        <br></br>
        <a
          className="Logout-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Logout
        </a>
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
