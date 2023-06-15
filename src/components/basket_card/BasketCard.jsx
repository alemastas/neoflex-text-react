import styles from './basket_card.module.scss';
import { deleteItem, plusItem, minusItem, getTempBasket, basketIndicatorFunction } from '../../helpers/Helpers';
import { useState } from 'react';

function BasketCard({props, setBasket, setCount}){ 

    function sumOfCounts(id){
        let item = getTempBasket().find(el => el.id === id);
        return item.counts * item.price;
    }

    function countsOfItem(id){
        let item = getTempBasket().find(el => el.id === id);
        return item.counts;
    }

    const [sum, setSum] = useState(props.price * props.counts);
    const [count, setItemCounts] = useState(props.counts);

    return (
        <div className={styles.basket_card}>
            <div className={styles.basket_card_line}>
                <div className={styles.basket_card_img_holder}>
                <img className={styles.basket_card_img} src={props.img} alt="headphones" />
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
                    src='/img/icons/Rubish.png'
                    alt="delete item"
                    onClick={function (){
                        deleteItem(props.id);
                        setBasket(getTempBasket());
                        setCount(basketIndicatorFunction());
                    }}
                />
                </div>
            </div>
            <div className={styles.basket_card_counter}>
                <div className={styles.basket_card_numbers}>
                <button className={styles.basket_card_counter_btn} 
                    id={props.id}
                    onClick={function (){
                        minusItem(props.id);
                        setSum(sumOfCounts(props.id));
                        setItemCounts(countsOfItem(props.id));
                        setCount(basketIndicatorFunction());
                    }}>
                    -
                </button>
                <span id={props.id}>
                    {count}
                </span>
                <button className={styles.basket_card_counter_btn} 
                    id={props.id}
                    onClick={function(){
                        plusItem(props.id);
                        setSum(sumOfCounts(props.id));
                        setItemCounts(countsOfItem(props.id));
                        setCount(basketIndicatorFunction());

                    }}
                    >
                    +
                </button>
                </div>
                <div className={styles.card_price}>
                <p className={styles.basket_card_text} id={props.id}>
                    {sum} ₽
                </p>
                </div>
            </div>
        </div>
    )
}

export default BasketCard;