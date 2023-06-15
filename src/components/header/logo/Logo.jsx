import styles from './logo.module.scss'

function Logo(){
    return (
        <div className={styles.logo}>
            <a href="main" className={styles.logo_link}>
                <h2>QPICK</h2>
            </a>
        </div>
    )
}

export default Logo;