import styles from './main.module.scss';
import Headphones from '../../const/Headphones';
// import Card from '../card/Card';

function Main(){
    return (
        <main className={styles.main}>
            <div className={styles.main_hdphns_container}>

                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    Headphones
                </p>
                </div>

                <div className={styles.card_container} id="card_container">

                    {/* {Headphones.map(el => {
                        if(el.type === 'hdph'){
                            <Card props={el}/>
                        }
                    })} */}

                {/* here cards rendering */}
                </div>

            </div>
            <div className={styles.main_hdphns_container}>
                <div className={styles.main_hdfns_title}>
                <p className={styles.main_hdfns_title}>
                    Wireless Headphones
                </p>
                </div>
                <div className={styles.card_container} id="wrls_container">
                {/* here cards rendering */}
                </div>
            </div>
        </main>
    )
}

export default Main;