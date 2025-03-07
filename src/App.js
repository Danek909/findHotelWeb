import { lazy, Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './redux/redux-store';
import Header from './Header/Header';

const Choose = lazy(() => import('./Choose/Choose'));
const Recent = lazy(() => import('./Recent/Recent'));
const Login = lazy(() => import('./Login/Login'));
const Modal = lazy(() => import('./Modal/Modal'));
const Footer = lazy(() => import('./Footer/Footer_botom'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SectionHotel = lazy(() => import('./SectionHotel/SectionHotel'));
const Banner = lazy(() => import('./Banner/Banner'));

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <BrowserRouter>
      <Provider store={store} >
        <CookiesProvider>
          <Suspense>
            <Header/>
            <Banner onSearch={setSearchTerm}/>
            <Choose />
            <SectionHotel searchTerm={searchTerm}/>
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
