import styles from './main.module.scss';
import { Headphones } from '../../const/Headphones';
import Card from '../../components/card/Card';
import { getLang } from '../../helpers/Helpers';

function Main({setBasket}){
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>

                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    {getLang() === 'rus' ? 'Проводные наушники' : 'Headphones'}
                </p>
                </div>
                <div className={styles.card_container} id="hdph_container">

                {Headphones.map(el =>{
                      if(el.type === 'hdph'){ return <Card setBasket={setBasket} props={el} key={el.id}/> }
                      else return null
                })}

                </div>
            </div>
            <div className={styles.main_hdphns_container}>
                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    {getLang() === 'rus' ? 'Беспроводные наушники' : 'Wireless Headphones'}
                </p>
                </div>
                <div className={styles.card_container} id="wrls_container">

                {Headphones.map(el =>{
                      if(el.type === 'wrls'){ return <Card setBasket={setBasket} props={el} key={el.id}
                      /> }
                      else return null;
                })}
                  
                </div>
            </div>
            {/* <div className={styles.boopher}></div> */}
        </main>
    )
}

export default Main;