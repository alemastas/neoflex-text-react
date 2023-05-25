import styles from './logo.module.scss'

function Logo(){
    return (
        <div className={styles.logo}>
            <a href="index.html" className={styles.logo_link}>
                <h2>QPICK</h2>
            </a>
        </div>
    )
}

export default Logo;