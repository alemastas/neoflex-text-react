import styles from './basket.module.scss';
import { getLang, getTempBasket } from '../../helpers/Helpers';
import BasketCard from '../basket_card/BasketCard'
import BasketBoard from '../basket_board/BasketBoard';
import { useState } from 'react';

function Basket(){
    const [basket, setBasket] = useState(getTempBasket());
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>
                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    {getLang() === 'rus' ? 'Корзина' : 'Basket'}
                </p>
                </div>

                <div className={styles.basket_wrapper}>
                    <div className={styles.basket_container} id="basket_container">
                    {basket && basket?.map( el => {
                        return <BasketCard props={el} func={setBasket} key={el.id}/>
                    })}
                    </div>

                    <BasketBoard />
                </div>
            </div>
            <div className={styles.boopher}></div>
        </main>
    )
}

export default Basket;