import styles from './service.module.scss';
import service from "../../../img/icons/Lang.svg"

function Service(){
    return(
        <div className={styles.services}>
            <p className={styles.lang_text} id="services" style={{ pointerEvents: "none" }}>
                Terms of service
            </p>
            <div className={styles.lang_handler}>
                <div className={styles.lang_icon}>
                <img
                    className={styles.lang_icon}
                    src={service}
                    alt="lang_icon.png"
                />
                </div>
                <button className={styles.lang_button} id="rus">
                Рус
                </button>
                <button className={styles.lang_button} id="eng">
                Eng
                </button>
            </div>
        </div>
    )
}

export default Service;