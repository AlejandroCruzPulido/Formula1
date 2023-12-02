import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import Main from './main/main';
import Account from './account/account';
import Calendar from './calendar/calendar';
import Bets from './bets/bets';
import Chat from './chat/chat';
import TeamInfoPage from './team/teampage';
import PilotInfoPage from './info/pilotpage';
import Live from './live/live';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/team/:teamName" element={<TeamInfoPage />} />
          <Route path="/pilot/:teamName" element={<PilotInfoPage />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
