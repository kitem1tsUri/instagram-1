import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { SignInPage } from './pages/sign-in-page';
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
