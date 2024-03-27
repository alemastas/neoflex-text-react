import styles from "./modal.module.scss";
import { getLang } from "../../helpers/Helpers";

export function Modal(modalStatus, setModalStatus){
    const trues = styles.modal_true;
    const falses = styles.modal_false;
    return (
        <div className={modalStatus.modalStatus === true ? trues : falses}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_btn_wrapper}>
                        <h2>{getLang() === 'rus' ? 'Оплата' : 'Payment'}</h2>
                        <button className={styles.modal_button} onClick={el => modalStatus.setModalStatus(false)}>
                                <img src="/img/icons/close.png" alt="close" data-title="Close" className={styles.modal_icon}/>
                        </button>
                    </div>
                    <span className={styles.modal_span}>{getLang() === 'rus' ? 'Номер карты' : 'Card numbers'}</span><textarea className={styles.modal_text}></textarea>
                    <div className={styles.modal_group}>
                        <div className={styles.modal_group_items}>
                            <span className={styles.modal_span}>{getLang() === 'rus' ? 'Дата' : 'Date'}</span><textarea className={styles.modal_text}></textarea>
                            <span className={styles.modal_span}>M/Y</span>
                        </div>
                        <div className={styles.modal_group_items}>
                            <span className={styles.modal_span}>{getLang() === 'rus' ? 'Секретный код' : 'Secret code'}</span>
                            <textarea className={styles.modal_text}></textarea>
                        </div>
                    </div>
                    <button className={styles.modal_submite}>{getLang() === 'rus' ? 'ПОДТВЕРДИТЬ' : 'CONFIRM'}</button>
                    <div className={styles.modal_sum}>
                        <h3>{}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;