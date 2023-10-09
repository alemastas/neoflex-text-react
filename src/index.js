import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { isBasketExist, checkLang } from './helpers/Helpers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = function(){
  isBasketExist();
  checkLang();
}
