import styles from './basket_card.module.scss';
import { deleteItem, plusItem, minusItem, getTempBasket } from '../../helpers/Helpers';
import { useState } from 'react';

function BasketCard({props}){ 
    // console.log(props)
    // for check: '../../img/headphones/Image1.png'

    function sumOfCounts(id){
        let item = getTempBasket().find(el => el.id === id);
        return item.counts * item.price;
    }

    function countsOfItem(id){
        let item = getTempBasket().find(el => el.id === id);
        return item.counts;
    }

    const [sum, setSum] = useState(props.price * props.counts);
    const [count, setCounts] = useState(props.counts);

    return (
        <div className={styles.basket_card}>
            <div className={styles.basket_card_line}>
                <div className={styles.basket_card_img_holder}>
                <img className={styles.basket_card_img} src="../../img/headphones/Image1.png" alt="headphones" />
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
                    onClick={function (){
                        deleteItem(props.id);
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
                        setCounts(countsOfItem(props.id));
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
                        setCounts(countsOfItem(props.id));

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