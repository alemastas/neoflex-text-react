import styles from './basket.module.scss';
import { isRussian } from '../../helpers/Helpers';
import BasketCard from '../basket_card/BasketCard'
import BasketBoard from '../basket_board/BasketBoard';
import { Locale } from '../../const/locale';

function Basket({basket, setBasket, setCount}){
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>
                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    {isRussian() ? Locale.rus.basket : Locale.eng.basket}
                </p>
                </div>

                <div className={styles.basket_wrapper}>
                    <div className={styles.basket_container} id="basket_container">
                    {basket && basket?.map( el => {
                        return <BasketCard props={el} 
                            setBasket={setBasket} 
                            setCount={setCount}
                            key={el.id}
                            />
                    })}
                    </div>

                    <BasketBoard/>
                </div>
            </div>
            <div className={styles.boopher}></div>
        </main>
    )
}

export default Basket;