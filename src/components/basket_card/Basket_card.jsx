import styles from './basket_card.module.scss';
import { updateIndicator, getLang } from '../../helpers/Helpers';

function Card({props}){ 
    // for check: '../../img/headphones/Image1.png'
    // TODO dynamic img print

    return (
        <div className={styles.basket_card}>
            <div className={styles.basket_card_line}>
                <div className={styles.basket_card_img_holder}>
                <img className={styles.basket_card_img} src={require('../../img/headphones/Image1.png')} alt="headphones" />
                </div>
                <div className={styles.basket_card_naming}>
                <div className={styles.card_name}>
                    <h3>
                    {props.title}
                    </h3>
                </div>
                <div className={styles.card_price}>
                    <p className={styles.basket_card_text}>
                    ${props.price} ₽
                    </p>
                </div>
                </div>
                <div className={styles.basket_delete_item}>
                <input
                    type="image"
                    className="basket_delete_button"
                    data-title="Delete"
                    id={props.id}
                    src={require('../../img/icons/Rubish.png')}
                    alt="delete item"
                />
                </div>
            </div>
            <div className={styles.basket_card_counter}>
                <div className={styles.basket_card_numbers}>
                <button className={styles.basket_card_counter_btn} id={props.id}>
                    -
                </button>
                <span id={props.id}>
                    {props.counts}
                </span>
                <button className={styles.basket_card_counter_btn} id={props.id}>
                    +
                </button>
                </div>
                <div className={styles.card_price}>
                <p className={styles.basket_card_text} id={props.id}>
                    {props.price * props.counts} ₽
                </p>
                </div>
            </div>
        </div>
    )
}

export default Card;