import { Cash, CalendarClear, Videocam, Person } from 'react-ionicons';
import logo from '../images/f1-logo-1.jpg';
import ferrari_logo from '../images/ferrari-logo.jpg'
import astonmartin_logo from '../images/astonmartin-logo.jpg'
import redbull_logo from '../images/redbull-logo.jpg'
import mercedes_logo from '../images/mercedes-logo.svg.png'
import './main.css';

function Main() {
  return (   
<div className="Main">
   <header className="Main-header">
     <img src={logo} className="Main-logo" alt="logo" />
   </header>

   <div className='Main-body'>
    <div className='Ferrari'>
      <div className='Ferrari-left'>
      <label>Ferrari</label>
      <img src={ferrari_logo} className='Ferrari-logo' alt='ferrari_logo'></img>
      </div>
      <div className='Ferrari-right'>
          <label>Information of the team</label>
          <p></p>
          <label>Main's Pilot of the team</label>
      </div>
    </div>
    <div className='AstonMartin'>
      <div className='AstonMartin-left'>
      <label>AstonMartin</label>
      <img src={astonmartin_logo} className='AstonMartin-logo' alt='astonmartin-logo'></img>
      </div>
      <div className='AstonMartin-right'>
          <label>Information of the team</label>
          <p></p>
          <label>Main's Pilot of the team</label>
      </div>
    </div>
    <div className='RedBull'>
      <div className='RedBull-left'>
      <label>Red Bull</label>
      <img src={redbull_logo} className='RedBull-logo' alt='redbull-logo'></img>
      </div>
      <div className='RedBull-right'>
          <label>Information of the team</label>
          <p></p>
          <label>Main's Pilot of the team</label>
      </div>
    </div>
    <div className='Mercedes'>
      <div className='Mercedes-left'>
      <label>Mercedes</label>
      <img src={mercedes_logo} className='Mercedes-logo' alt='mercedes-logo'></img>
      </div>
      <div className='Mercedes-right'>
          <label>Information of the team</label>
          <p></p>
          <label>Main's Pilot of the team</label>
      </div>
    </div>
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
export default Main;
