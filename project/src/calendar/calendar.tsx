import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Cash, Videocam, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './calendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const events = [
    {
      title: 'Recordatorio 1',
      start: new Date(2023, 10, 10, 10, 0), 
      end: new Date(2023, 10, 10, 12, 0), 
    },
    {
      title: 'Recordatorio 2',
      start: new Date(2023, 10, 15, 14, 0),
      end: new Date(2023, 10, 15, 16, 0),
    },
  ];

  return (
    <div className="Calendar">
      <header className="Calendar-header">
        <img src={logo} className="Calendar-logo" alt="logo" />
      </header>

      <div className="Calendar-body">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }} 
        />
      </div>

      <footer className="Footer">
        <div className="Main-footer">
          <a href=" ">
            <Cash color={'#FFFFFF'} height="2em" />
          </a>
          <a href=" ">
            <Car color={'#FFFFFF'} />
          </a>
          <a href=" ">
            <Videocam color={'#FFFFFF'} />
          </a>
          <a href="/account">
            <Person color={'#FFFFFF'} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MyCalendar;
