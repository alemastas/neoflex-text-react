import Heart from '../../../img/icons/Heart.svg'
import Basket from '../../../img/icons/Basket.svg'
import styles from'./indicator.module.scss'

function Indicator(){
    return (
        <div className={styles.icons}>
            <div className={styles.icon}>
            <img src={Heart} alt="favorit icon" />
        </div>
        <div className={styles.icon}>
            <a href="../basket/basket.html">
            <img src={Basket} alt="basket icon" />
            </a>
        </div>
            <div className="circle_indicator">
            <span id="basket_indicator" />
            </div>
        </div>
    )
}
export default Indicator;