import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header' 
import Main from './components/main/Main' 
import Basket from './components/basket/Basket'
import Footer from './components/footer/Footer' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getTempBasket } from './helpers/Helpers';

function App() {

  const [basket, setBasket] = useState(getTempBasket());

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/*' element={<Main setBasket={setBasket} />} />
          <Route path='/basket' element={<Basket basket={basket} setBasket={setBasket} />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
