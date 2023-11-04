import React, { useState } from 'react';
import { Cash, CalendarClear, Videocam, Person } from 'react-ionicons';
import logo from '../images/f1-logo-1.jpg';
import ferrari_logo from '../images/ferrari-logo.jpg';
import astonmartin_logo from '../images/astonmartin-logo.jpg';
import redbull_logo from '../images/redbull-logo.jpg';
import mercedes_logo from '../images/mercedes-logo.svg.png';
import './main.css';

interface TeamInfo {
  name: string;
  logo: string;
  info: string;
}

interface PilotInfo {
  name: string;
  info: string;
}

function Main() {
  const [teamInfo, setTeamInfo] = useState<string | null>(null);
  const [pilotInfo, setPilotInfo] = useState<string | null>(null);

  const teams: Record<string, TeamInfo> = {
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

  const pilots: Record<string, PilotInfo> = {
    Ferrari: {
      name: 'Carlos Sainz Jr.',
      info: 'Carlos Sainz Jr. is a Spanish racing driver who made his Formula 1 debut with Toro Rosso.',
    },
    'Aston Martin': {
      name: 'Fernando Alonso',
      info: 'Fernando Alonso is a Spanish racing driver, awarded the Prince of Asturias Award in 2005.',
    },
    'Red Bull': {
      name: 'Max Verstappen',
      info: 'Max Verstappen is a Dutch motorsport driver who has been a Formula 1 driver since 2015.',
    },
    Mercedes: {
      name: 'George Russell',
      info: 'George Russell is a British motorsport driver who has been a driver for the Mercedes-AMG Petronas team since 2022.',
    },
  };

  const handleTeamInfoClick = (teamName: string) => {
    setTeamInfo(teamName);
    setPilotInfo(null);
  };

  const handlePilotInfoClick = (teamName: string) => {
    setPilotInfo(teamName);
    setTeamInfo(null);
  };

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
              <button onClick={() => handleTeamInfoClick(teamName)}>Information of the team</button>
              <button onClick={() => handlePilotInfoClick(teamName)}>Main's Pilot of the team</button>
            </div>
          </div>
        ))}
      </div>

      <div className="Main-info">
        {teamInfo && (
          <div>
            <h3>{teams[teamInfo].name}</h3>
            <img src={teams[teamInfo].logo} alt={`${teamInfo}_logo`} />
            <p>{teams[teamInfo].info}</p>
          </div>
        )}
        {pilotInfo && (
          <div>
            <h3>{pilots[pilotInfo].name}</h3>
            <p>{pilots[pilotInfo].info}</p>
          </div>
        )}
      </div>

      <footer className="Footer">
        <div className="Main-footer">
          <a href="/bets">
            <Cash color={'#FFFFFF'} height="2em" />
          </a>
          <a href="/calendar">
            <CalendarClear color={'#FFFFFF'} />
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

export default Main;
