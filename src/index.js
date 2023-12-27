import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Choose from './Choose/Choose';
import SectionHotel from './SectionHotel/SectionHotel';
import Reviews from './Reviews/Reviews';
import Recent from './Recent/Recent';
import Footer from './Footer/Footer_botom';
import Login from './Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Choose />
    <SectionHotel />
    <Reviews />
    <Recent />
    <Footer />
    <Login />
    <App />
  </React.StrictMode>
);

reportWebVitals();
