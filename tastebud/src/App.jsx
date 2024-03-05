import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import ForgotPasswordPage1 from './components/ForgotPasswordPage1.jsx';
import ForgotPasswordPage2 from './components/ForgotPasswordPage2.jsx';
import HomePage from './components/HomePage.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage1 />} />
          <Route path="/forgotpassword2" element={<ForgotPasswordPage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;