import { Cash, Videocam, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './calendar.css';

function Calendar() {
  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <img src={logo} className="Calendar-logo" alt="logo" />
      </header>

      <div className='Calendar-body'>
        
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
        <Car
            color={'#FFFFFF'}
        />
    </a>
    <a href=' '>
        <Videocam
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

export default Calendar;
