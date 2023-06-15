import styles from './links.module.scss';
import { getLang } from '../../../helpers/Helpers';
import { Link } from 'react-router-dom';

function Links(){
    return(
        <ul className={styles.links_ul}>
        <li className={styles.links_text} id="favorite" style={{ pointerEvents: "none" }}>
            {getLang() === 'rus' ? 'Избанное' : 'Favorite'}
        </li>
        <li className={styles.links_text}>
            <Link to="/basket" className={styles.non_decoration} id="basket">
            {getLang() === 'rus' ? 'Корзина' : 'Basket'}
            </Link>
        </li>
        <li className={styles.links_text} id="contacts" style={{ pointerEvents: "none" }}>
            {getLang() === 'rus' ? 'Контакты' : 'Contacts'}
        </li>
        </ul>
    )
}
export default Links;