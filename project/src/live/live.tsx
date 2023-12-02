import { Cash, CalendarClear, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import live from '../images/live.jpg';
import './live.css';

function Live() {
  return (
    <div className="Live">
      <header className="Live-header">
        <img src={logo} className="Live-logo" alt="logo" />
      </header>

      <div className='Live-body'>
        <img src={live} className='Live-Photo' alt='live' />
        <br></br>
        <a href='https://www.dazn.com/es-ES/home/6gfu4ee2mwqpnf2hg9jd5rdn2' target='_blank' rel='noopener noreferrer'>
          <button>See it on the official website</button>
        </a>
      </div>

      <footer className='Footer' >
        <div className='Main-footer'>

          <a href='/bets'>
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
          <a href='/main'>
            <Car
              color={'#FFFFFF'}
            />
          </a>
          <a href='/account'>
            <Person
              color={'#FFFFFF'}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Live;
