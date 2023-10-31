import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/login';
import SignUp from './sign-up/sign-up';
import Main from './main/main';
import Account from './account/account';
import { Calendar } from 'react-ionicons';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/> 
      <Route path="/login" element={<Login />}/> 
      <Route path="/signup" element={<SignUp />}/> 
      <Route path="/main" element={<Main />}/> 
      <Route path="/account" element={<Account />}/>
      <Route path="/calendar" element={<Calendar />}/> 
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
