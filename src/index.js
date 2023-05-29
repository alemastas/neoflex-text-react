import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Headphones } from './const/Headphones';
import { isBasketExist, getTempBasket, setTempBasket, checkLang } from './helpers/Helpers';
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



export function addBasket(id) { // add item to local storage)
  let temp_basket = getTempBasket();
  (temp_basket.length === 0) ? isNotDublicate(id) : ifDublicate(id);
};

export function ifDublicate(id) { // if sessionStorage includes added item
  let foundDublicate = false;
  let temp_basket = getTempBasket();
  temp_basket.map(el => { // check on dublicate
      if (el.id === id) {
          el.counts++;
          foundDublicate = true;
      }
  });
  foundDublicate ? setTempBasket(temp_basket) : isNotDublicate(id);
}

export function isNotDublicate(id) { // use if sessionStorage not includes added item
  let temp_basket = getTempBasket();
  temp_basket.push(Headphones[id]);
  setTempBasket(temp_basket);
}
