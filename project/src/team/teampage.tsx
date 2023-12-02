import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teams } from '../main/main';
import logo from '../images/f1-logo-1.jpg';
import './teampage.css';

function TeamInfoPage() {
  const { teamName } = useParams();
  const team = teamName ? teams[teamName] : null;

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="TeamInfo">
      <header>
      <img src={logo} className="Team-logo" alt='logo'/>
      </header>
      <h3>{team.name}</h3>
      <img src={team.logo} alt={`${team.name}_logo`} />
      <p>{team.info}</p>
      <div className="BackButton">
        <Link to="/main">Back to Main</Link>
      </div>
    </div>
  );
}

export default TeamInfoPage;
