import styles from './links.module.scss';
import { isRussian } from '../../../helpers/Helpers';
import { Link } from 'react-router-dom';
import Locale from '../../../const/locale';

function Links(){
    return(
        <ul className={styles.links_ul}>
        <li className={styles.links_text} id="favorite" style={{ pointerEvents: "none" }}>
            {isRussian() ? Locale.rus.favorite : Locale.eng.favorite}
        </li>
        <li className={styles.links_text}>
            <Link to="/basket" className={styles.non_decoration} id="basket">
            {isRussian() ? Locale.rus.basket : Locale.eng.basket}
            </Link>
        </li>
        <li className={styles.links_text} id="contacts" style={{ pointerEvents: "none" }}>
            {isRussian() ?  Locale.rus.contacts : Locale.eng.contacts}
        </li>
        </ul>
    )
}
export default Links;