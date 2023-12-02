import React from 'react';
import { Cash, CalendarClear, Videocam, Person } from 'react-ionicons';
import { Link } from 'react-router-dom';
import logo from '../images/f1-logo-1.jpg';
import ferrari_logo from '../images/ferrari-logo.jpg';
import astonmartin_logo from '../images/astonmartin-logo.jpg';
import redbull_logo from '../images/redbull-logo.jpg';
import mercedes_logo from '../images/mercedes-logo.svg.png';
import './main.css';

export interface TeamInfo {
  name: string;
  logo: string;
  info: string;
}

export interface PilotInfo {
  name: string;
  info: string;
}

export const teams: Record<string, TeamInfo> = {
  Ferrari: {
    name: 'Ferrari',
    logo: ferrari_logo,
    info: 'Scuderia Ferrari is the sports division of Ferrari automobiles. It is the oldest team and the most successful in Formula 1.',
  },
  AstonMartin: {
    name: 'Aston Martin',
    logo: astonmartin_logo,
    info: 'Aston Martin is a British car manufacturer that has participated in Formula 1 in various ways. The current drivers are Fernando Alonso and Lance Stroll.',
  },
  RedBull: {
    name: 'Red Bull',
    logo: redbull_logo,
    info: 'Red Bull Racing is an Austrian Formula 1 team based in Milton Keynes, England, owned by Red Bull GmbH.',
  },
  Mercedes: {
    name: 'Mercedes',
    logo: mercedes_logo,
    info: 'Mercedes-Benz is one of the most successful automotive companies in Formula 1.',
  },
};

export const pilots: Record<string, PilotInfo> = {
  Ferrari: {
    name: 'Carlos Sainz Jr.',
    info: 'Carlos Sainz Jr is a Spanish racing driver who made his Formula 1 debut with Toro Rosso.',
  },
  AstonMartin: {
    name: 'Fernando Alonso',
    info: 'Fernando Alonso is a Spanish racing driver, awarded the Prince of Asturias Award in 2005.',
  },
  RedBull: {
    name: 'Max Verstappen',
    info: 'Max Verstappen is a Dutch motorsport driver who has been a Formula 1 driver since 2015.',
  },
  Mercedes: {
    name: 'George Russell',
    info: 'George Russell is a British motorsport driver who has been a driver for the Mercedes-AMG Petronas team since 2022.',
  },
};

function Main() {

  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
      </header>

      <div className="Main-body">
        {Object.keys(teams).map((teamName) => (
          <div key={teamName} className={teamName}>
            <div className={`${teamName}-left`}>
              <label>{teamName}</label>
              <img src={teams[teamName].logo} className={`${teamName}-logo`} alt={`${teamName}_logo`} />
            </div>
            <div className={`${teamName}-right`}>
              <button><Link to={`/team/${teamName}`}>Information of the team</Link></button>
              <br></br>
              <br></br>
              <button><Link to={`/pilot/${teamName}`}>Main's Pilot of the team</Link></button>
            </div>
          </div>
        ))}
      </div>

      <footer className="Footer">
        <div className="Main-footer">
          <Link to="/bets">
            <Cash color={'#FFFFFF'} height="2em" />
          </Link>
          <Link to="/calendar">
            <CalendarClear color={'#FFFFFF'} />
          </Link>
          <Link to="/live">
            <Videocam color={'#FFFFFF'} />
          </Link>
          <Link to="/account">
            <Person color={'#FFFFFF'} />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Main;
