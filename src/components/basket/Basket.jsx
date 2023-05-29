import styles from './basket.module.scss';
import addIdCounts, { Headphones } from '../../const/Headphones';
import Card from '../../components/card/Card';
import { getLang, getTempBasket } from '../../helpers/Helpers';
import Basket_card from './../basket_card/Basket_card'

function Basket(){
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>

                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    {getLang() === 'rus' ? 'Корзина' : 'Basket'}
                </p>
                </div>
                <div className={styles.basket_container} id="basket_container">

                {getTempBasket().map( el => {
                    return <Basket_card props={el} id={el.id}/>
                })}
{/* 
                {addIdCounts(Headphones).map(el =>{
                      if(el.type === 'hdph'){ return <Card props={el} id={el.id}/> }
                      else return null
                })} */}

                </div>
            </div>

            <div className={styles.boopher}></div>
        </main>
    )
}

export default Basket;