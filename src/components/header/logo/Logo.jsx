import styles from './logo.module.scss';
import { Link } from 'react-router-dom';

function Logo(){
    return (
        <div className={styles.logo}>
            <Link to="main" className={styles.logo_link}>
                <h2>QPICK</h2>
            </Link>
        </div>
    )
}

export default Logo;