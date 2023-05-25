import styles from './links.module.scss'

function Links(){
    return(
        <ul className={styles.links_ul}>
        <li className={styles.links_text} id="favorite" style={{ pointerEvents: "none" }}>
            Favorite
        </li>
        <li className={styles.links_text}>
            <a href="../basket/basket.html" className={styles.non_decoration} id="basket">
            Basket
            </a>
        </li>
        <li className={styles.links_text} id="contacts" style={{ pointerEvents: "none" }}>
            Contacts
        </li>
        </ul>
    )
}
export default Links;