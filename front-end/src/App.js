import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { SignInPage } from './pages/sign-in-page';
import { SignUpPage } from './pages/sign-up-page';
import './styles/App.css';

const App = () => {
  return ( <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage/>}/>
    </Routes>
  </div>
  );
}

export default App;
