import { useState } from 'react';
import Heart from '../../../img/icons/Heart.svg';
import Basket from '../../../img/icons/Basket.svg';
import styles from'./indicator.module.scss';
import { basketIndicatorFunction } from '../../../helpers/Helpers';

function Indicator(){ // TODO indicator 
    // const indicator = document.getElementById('basket_indicator');

    const [count, setCount] = useState(basketIndicatorFunction());
    return (
        <div className={styles.icons}>
            <div className={styles.icon}>
            <img src={Heart} alt="favorit icon" />
        </div>
        <div className={styles.icon}>
            <a href="../basket/basket.html">
            <img src={Basket} alt="basket icon" />
            </a>
        </div>
            <div className={styles.basket_indicator}>
            <span id="basket_indicator">
            {count}
            </span>
            </div>
        </div>
    )
}

export default Indicator;