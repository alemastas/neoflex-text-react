import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header' 
import Main from './components/main/Main' 
import Basket from './components/basket/Basket'
import Footer from './components/footer/Footer' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getTempBasket, basketIndicatorFunction } from './helpers/Helpers';

function App() {

  const [basket, setBasket] = useState(getTempBasket());
  const [count, setCount] = useState(basketIndicatorFunction());

  return (
    <BrowserRouter>
      <Header count={count} setCount={setCount}/>
        <Routes>
          <Route path='/basket' element={<Basket basket={basket} 
            setBasket={setBasket} 
            setCount={setCount}/>} />
          <Route path='*' element={<Main setBasket={setBasket} />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
