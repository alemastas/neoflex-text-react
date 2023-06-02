import { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Basket from './components/basket/Basket';
import { getTempBasket } from './helpers/Helpers';

function App() {

  const [basket, setBasket] = useState(getTempBasket());

  return (
    <div className="App">
      <div className='wrapper'>

        <Header />

        <Main basket={basket} setBasket={setBasket}/>

        <Basket basket={basket} 
          setBasket={setBasket}/>

        <Footer />

      </div>
    </div>
  );
}

export default App;
