import styles from './basket_board.module.scss';
import { getLang, updateSum } from '../../helpers/Helpers'
import { useState } from 'react';

function Basket_board(){

    const [sum, setSum] = useState(updateSum);

    window.onclick = function(){ // TODO make it smarter
        setSum(updateSum());
    }

    return (
        <div className={styles.basket_wrapper}>
            <div className={styles.basket_shop}>
                <div className={styles.basket_placeholder}>
                <h3>Итого</h3>
                <div className={styles.result_palceholder}>
                    <h3>₽ </h3>
                    <h3 id="shop_result"
                    >{sum}</h3>
                </div>
                </div>
                <button className={styles.basket_shop_button}>
                <span className={styles.basket_shop_button_text} id="basket_shop_button_text">
                    {getLang() === 'rus' ? 'Перейти к оформлению' : 'To ordering'}
                </span>
                </button>
            </div>
        </div>
    )
}

export default Basket_board;