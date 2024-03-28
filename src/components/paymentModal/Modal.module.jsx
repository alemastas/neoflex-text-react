import styles from "./modal.module.scss";
import { isRussian } from "../../helpers/Helpers";
import { Locale } from "../../const/locale";

export function Modal(modalStatus, setModalStatus){
    const trues = styles.modal_true;
    const falses = styles.modal_false;
    return (
        <div className={modalStatus.modalStatus === true ? trues : falses}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_btn_wrapper}>
                        <h2>{isRussian() ? Locale.rus.payment : Locale.eng.payment}</h2>
                        <button className={styles.modal_button} onClick={() => modalStatus.setModalStatus(false)}>
                                <img src="/img/icons/close.png" alt="close" data-title="Close" className={styles.modal_icon}/>
                        </button>
                    </div>
                    <span className={styles.modal_span}>{isRussian() ?  Locale.rus.card : Locale.eng.card}</span><textarea className={styles.modal_text}></textarea>
                    <div className={styles.modal_group}>
                        <div className={styles.modal_group_items}>
                            <span className={styles.modal_span}>{isRussian() ? Locale.rus.date : Locale.eng.date}</span><textarea className={styles.modal_text}></textarea>
                            <span className={styles.modal_span}>M/Y</span>
                        </div>
                        <div className={styles.modal_group_items}>  
                            <span className={styles.modal_span}>{isRussian() ? Locale.rus.code : Locale.eng.code}</span>
                            <textarea className={styles.modal_text}></textarea>
                        </div>
                    </div>
                    <button className={styles.modal_submite}>{isRussian() ? Locale.rus.conf : Locale.eng.conf}</button>
                    {/* <div className={styles.modal_sum}> // add total sum of items
                        <h3>{}</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal;