import styles from './main.module.scss';
import addIdCounts, { Headphones } from '../../const/Headphones';
import Card from '../../components/card/Card';

console.log(addIdCounts(Headphones))

function Main(){
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>

                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    Headphones
                </p>
                </div>
                <div className={styles.card_container} id="hdph_container">

                {addIdCounts(Headphones).map(el =>{
                      if(el.type === 'hdph'){ return <Card props={el} key={el.id}/> }
                      else return null
                  })}

                </div>
            </div>
            <div className={styles.main_hdphns_container}>
                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    Wireless Headphones
                </p>
                </div>
                <div className={styles.card_container} id="wrls_container">

                {addIdCounts(Headphones).map(el =>{
                      if(el.type === 'wrls'){ return <Card props={el} key={el.id}/> }
                      else return null;
                  })}
                  
                </div>
            </div>
        </main>
    )
}

export default Main;