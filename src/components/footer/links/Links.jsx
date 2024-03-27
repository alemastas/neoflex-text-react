import styles from './links.module.scss';
import { getLang } from '../../../helpers/Helpers';
import { Link } from 'react-router-dom';
import mainLocale from '../../../const/locale';

function Links(){
    return(
        <ul className={styles.links_ul}>
        <li className={styles.links_text} id="favorite" style={{ pointerEvents: "none" }}>
            {getLang() === 'rus' ? mainLocale.rus.favorite : mainLocale.eng.favorite}
        </li>
        <li className={styles.links_text}>
            <Link to="/basket" className={styles.non_decoration} id="basket">
            {getLang() === 'rus' ? mainLocale.rus.basket : mainLocale.eng.basket}
            </Link>
        </li>
        <li className={styles.links_text} id="contacts" style={{ pointerEvents: "none" }}>
            {getLang() === 'rus' ?  mainLocale.rus.contacts : mainLocale.eng.contacts}
        </li>
        </ul>
    )
}
export default Links;