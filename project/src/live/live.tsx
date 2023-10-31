import { Cash, CalendarClear, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './live.css';

function Live() {
  return (
    <div className="Live">
      <header className="Live-header">
        <img src={logo} className="Live-logo" alt="logo" />
      </header>

      <div className='Live-body'>
            
      </div>

      <footer className='Footer' >
    <div className='Main-footer'>

    <a href=' '>
        <Cash
            color={'#FFFFFF'}
            height="2em"
        />
    </a>
    <a href=' '>
        <CalendarClear
            color={'#FFFFFF'}
        />
    </a>
    <a href=' '>
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
