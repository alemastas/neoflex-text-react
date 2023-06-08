import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <BrowserRouter>
        {/* <Route path="/"> */}
          <MainPage/>
        {/* </Route> */}
    </BrowserRouter>
  );
}

export default App;
