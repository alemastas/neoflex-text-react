import styles from './basketBoard.module.scss';
import { isRussian, updateSum } from '../../helpers/Helpers'
import { useState } from 'react';
import Modal from '../paymentModal/Modal.module';
import { Locale } from '../../const/locale';

function Basket_board(){
    const [sum, setSum] = useState(updateSum);
    const [modalStatus, setModalStatus] = useState(false);

    window.onclick = function(){ // TODO make it smarter
        setSum(updateSum());
    }

    return (
        <div className={styles.basket_wrapper}>
            <Modal modalStatus={modalStatus} setModalStatus={setModalStatus}></Modal>  
            <div className={styles.basket_shop}>
                <div className={styles.basket_placeholder}>
                <h3>{isRussian() ?  Locale.rus.sum : Locale.eng.sum}</h3>
                <div className={styles.result_palceholder}>
                    <h3>₽ </h3>
                    <h3 id="shop_result"
                    >{sum}</h3>
                </div>
                </div>
                <button className={styles.basket_shop_button} onClick={() => setModalStatus(true)}>
                <span className={styles.basket_shop_button_text} id="basket_shop_button_text">
                    {isRussian() ?  Locale.rus.basket_shop_button_text : Locale.eng.basket_shop_button_text}
                </span>
                </button>
            </div>
        </div>
    )
}

export default Basket_board;