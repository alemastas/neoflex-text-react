import { useState } from 'react';
import { getTempBasket } from '../helpers/Helpers';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Basket from '../components/basket/Basket';

function BasketPage(){

    const [basket, setBasket] = useState(getTempBasket());

    return(
        <div>
            <Header />
            <Basket basket={basket} 
                setBasket={setBasket}/>
            <Footer />
        </div>
    )
}

export default BasketPage;