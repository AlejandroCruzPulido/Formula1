import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Videocam, CalendarClear, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './bets.css';

function Bets() {
  const [pilot, setPilot] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bets, setBets] = useState<Array<{ user: string; pilot: string; quantity: string }>>([]);
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedSurname = localStorage.getItem('surname');
    if (storedName && storedSurname) {
      setUser(`${storedName} ${storedSurname}`);
    }
  }, []);

  const handleBetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBet = {
      user: user,
      pilot,
      quantity,
    };
    setBets([...bets, newBet]);
    setPilot('');
    setQuantity('');
  };

  const handleChatButtonClick = () => {
    navigate('/chat'); 
  };

  return (
    <div className="Bets">
      <header className="Bets-header">
        <img src={logo} className="Bets-logo" alt="logo" />
      </header>

      <div className="Bets-body">
        <div className="red-box">
          {bets.map((bet, index) => (
            <div key={index} className="black-box">
              <div>User: {bet.user}</div>
              <div>Pilot: {bet.pilot}</div>
              <div>Quantity: {bet.quantity}</div>
              <br></br>
            </div>
          ))}
        </div>
        <div className="red-box">
          <form onSubmit={handleBetSubmit}>
            <input
              type="text"
              placeholder="Pilot"
              value={pilot}
              onChange={(e) => setPilot(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button type="submit">Bet</button>
          </form>
        </div>
      </div>

      <footer className="Bets-footer">
        <div className="Main-footer">
          <a href='/live'>
            <Videocam color={'#FFFFFF'} height="2em" />
          </a>
          <a href='/calendar'>
            <CalendarClear color={'#FFFFFF'} />
          </a>
          <a href='/main'>
            <Car color={'#FFFFFF'} />
          </a>
          <a href='/account'>
            <Person color={'#FFFFFF'} />
          </a>
        </div>
      </footer>
      <div className="chat-button">
        <button onClick={handleChatButtonClick}>Chat</button>
      </div>
    </div>
  );
}

export default Bets;
