import styles from "./modal.module.scss";
import { isRussian } from "../../helpers/Helpers";
import { mainLocale } from "../../const/locale";

export function Modal(modalStatus, setModalStatus){
    const trues = styles.modal_true;
    const falses = styles.modal_false;
    return (
        <div className={modalStatus.modalStatus === true ? trues : falses}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_btn_wrapper}>
                        <h2>{isRussian() ? mainLocale.rus.payment : mainLocale.eng.payment}</h2>
                        <button className={styles.modal_button} onClick={el => modalStatus.setModalStatus(false)}>
                                <img src="/img/icons/close.png" alt="close" data-title="Close" className={styles.modal_icon}/>
                        </button>
                    </div>
                    <span className={styles.modal_span}>{isRussian() ?  mainLocale.rus.card : mainLocale.eng.card}</span><textarea className={styles.modal_text}></textarea>
                    <div className={styles.modal_group}>
                        <div className={styles.modal_group_items}>
                            <span className={styles.modal_span}>{isRussian() ? mainLocale.rus.date : mainLocale.eng.date}</span><textarea className={styles.modal_text}></textarea>
                            <span className={styles.modal_span}>M/Y</span>
                        </div>
                        <div className={styles.modal_group_items}>  
                            <span className={styles.modal_span}>{isRussian() ? mainLocale.rus.code : mainLocale.eng.code}</span>
                            <textarea className={styles.modal_text}></textarea>
                        </div>
                    </div>
                    <button className={styles.modal_submite}>{isRussian() ? mainLocale.rus.conf : mainLocale.eng.conf}</button>
                    {/* <div className={styles.modal_sum}> // add total sum of items
                        <h3>{}</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal;