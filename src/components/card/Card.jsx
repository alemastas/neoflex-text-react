import styles from './card.module.scss';

function Card({props}){ // for check: '../../img/headphones/Image1.png'
    // TODO dynamic img print
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={require('../../img/headphones/Image2.png')} alt="headphones" />
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
                <img src={require("../../img/icons/Star.png")} alt="star" />
                <span className={styles.card_span}>
                    {props.rate}
                </span>
                </div>
                <button className={styles.card_button} id={props.id}>
                <span className={styles.card_button_text}>
                    {sessionStorage.getItem('lang') === 'rus' ? 'Купить' : 'Buy'}
                </span>
                </button>
            </div>
        </div>
    )
}

export default Card;