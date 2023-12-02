import React, { useState, useEffect } from 'react';
import { Cash, Videocam, CalendarClear, Person, Car } from 'react-ionicons';
import logo from '../images/f1-logo-2.jpg';
import './chat.css';

function Chat() {
  const [messages, setMessages] = useState<Array<{ user: string; message: string }>>([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedSurname = localStorage.getItem('surname');
    if (storedName && storedSurname) {
      setUser(`${storedName} ${storedSurname}`);
    }
  
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      user: user, 
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="Chat">
      <header className="Chat-header">
        <img src={logo} className="Chat-logo" alt="logo" />
      </header>

      <div className="Chat-body">
        <div className="red-box">
          {messages.map((msg, index) => (
            <div key={index} className="black-box">
              <div>User: {msg.user}</div>
              <div>Message: {msg.message}</div>
              <br />
            </div>
          ))}
        </div>
        <div className="red-box">
          <form onSubmit={handleMessageSubmit}>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <footer className="Chat-footer">
        <div className="Main-footer">
          <a href='/bets'>
            <Cash color={'#FFFFFF'} height="2em" />
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
          <a href="/live">
            <Videocam color={'#FFFFFF'} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Chat;
