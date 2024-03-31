import styles from'./indicator.module.scss';
import { Link } from 'react-router-dom';

function Indicator({count, setCount }){ // TODO fix indicator from useState

    // here is was indicator's useState
    return (
        <div className={styles.icons}>
            <div className={styles.icon}>
            <img src="/img/icons/Heart.svg" alt="favorit icon" className={styles.img}/>
        </div>
        <div className={styles.icon}>
            <Link to="/basket">
            <img src="/img/icons/Basket.svg" alt="basket icon" className={styles.img}/>
            </Link>
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