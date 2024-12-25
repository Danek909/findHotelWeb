import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './18n'
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<img className="LoadingGif" src="../image/Loading.gif" alt="undefined"/>}>
        <App />
    </Suspense>
  </React.StrictMode>, document.getElementById('root')
);