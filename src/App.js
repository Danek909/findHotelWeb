import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Choose from './Choose/Choose';
import SectionHotel from './SectionHotel/SectionHotel';
import Reviews from './Reviews/Reviews';
import Recent from './Recent/Recent';
import Footer from './Footer/Footer_botom';
import Modal from './Modal/Modal';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Login from './Login/Login';



function App(props) {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <Header />
        <Banner />
        <Choose />
        <SectionHotel />
        <Reviews />
        <Recent />
        <Footer />
        <Modal />
        <Routes>
          <Route path='login' element={<Login />}/>
        </Routes>
      </Provider>
    </BrowserRouter>)
};

export default App;
