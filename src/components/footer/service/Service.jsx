import styles from './service.module.scss';
import { setLang, getLang} from '../../../helpers/Helpers';
import mainLocale from '../../../const/locale';

function Service(){
    return(
        <div className={styles.services}>
            <p className={styles.lang_text} id="services" style={{ pointerEvents: "none" }}>
                {getLang() === 'rus' ? mainLocale.rus.services :  mainLocale.eng.services}
            </p>
            <div className={styles.lang_handler}>
                <div className={styles.lang_icon}>
                <img
                    className={styles.lang_icon}
                    src="/img/icons/Lang.svg"
                    alt="lang_icon.png"
                />
                </div>
                <button className={styles.lang_button} id="rus"
                    onClick={function (){
                        setLang('rus')
                        window.location.reload() // TODO add something better, maybe useState
                    }}>
                    Рус
                </button>
                <button className={styles.lang_button} 
                    id="eng"
                    onClick={function (){
                        setLang('eng')
                        window.location.reload() // TODO add something better
                    }}>
                    Eng
                </button>
            </div>
        </div>
    )
}

export default Service;