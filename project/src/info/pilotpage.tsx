import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { pilots } from '../main/main';
import logo from '../images/f1-logo-1.jpg';
import './pilotpage.css';

function PilotInfoPage() {
  const { teamName } = useParams();
  const pilot = teamName ? pilots[teamName] : null;

  if (!pilot) {
    return <div>Pilot not found</div>;
  }

  return (
    <div className="PilotInfo">
      <header>
        <img src={logo} className="Pilot-logo" alt='logo' />
      </header>
      <h3>{pilot.name}</h3>
      <p>{pilot.info}</p>
      <div className="BackButton">
        <Link to="/main">Back to Main</Link>
      </div>
    </div>
  );
}

export default PilotInfoPage;
