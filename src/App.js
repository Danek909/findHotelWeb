import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { CookiesProvider } from 'react-cookie';
import Banner from './Banner/Banner';
import SectionHotel from './SectionHotel/SectionHotel';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer_botom';
import Modal from './Modal/Modal';
import Header from './Header/Header';
import Login from './Login/Login';
import Recent from './Recent/Recent';
import Choose from './Choose/Choose';





function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <CookiesProvider>
          <Suspense fallback={<div>Loading...</div>} >
            <Header />
            <Banner />
            <Choose />
            <SectionHotel />
            <Reviews />
            <Recent />
            <Footer />
            <Modal />
            <Routes>
              <Route path='/Header' element={<Header />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </CookiesProvider>
      </Provider>
    </BrowserRouter>)
};

export default App;
