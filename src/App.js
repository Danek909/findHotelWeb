import React from 'react';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
      <Route path="/login" element={<Login />} />
  </BrowserRouter>)
};

export default App;
