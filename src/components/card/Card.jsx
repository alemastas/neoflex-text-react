import styles from './card.module.scss';
import { addBasket } from '../../helpers/Helpers';
import { updateIndicator, isRussian, getTempBasket } from '../../helpers/Helpers';
import { Locale } from '../../const/locale';

function Card({props, setBasket}){ 
    
    function btnClick(){
        addBasket(props.id);
        updateIndicator();
        setBasket(getTempBasket());
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={props.img} alt="headphones" />
            </div>
            <div className={styles.card_line}>
                <div className={styles.card_name}>
                <h3>
                    {props.title}
                </h3>
                </div>
                <div className={styles.card_name}>
                    <p className={styles.regular}> 
                        {props.price} ₽
                    </p>
                    <p className={styles.regular_striked}>
                        {props.price + ((props.price / 100) * 15)} ₽
                    </p>
                </div>
            </div>
            <div className={styles.card_line}>
                <div className={styles.card_rate}>
                <img src="/img/icons/Star.png" alt="star" />
                <span className={styles.card_span}>
                    {props.rate}
                </span>
                </div>
                <button className={styles.card_button} 
                    id={props.id}
                    onClick={btnClick}
                    >
                <span className={styles.card_button_text} id={props.id}>
                    {isRussian() ? Locale.rus.buy : Locale.eng.buy}
                </span>
                </button>
            </div>
        </div>
    )
}

export default Card;