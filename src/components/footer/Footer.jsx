import React from 'react';
import Logo from '../logo/Logo';
import styles from './footer.module.scss';
import Links from './links/Links'
import SocialMedia from './socialMedia/SocialMedia'
import Service from './service/Service';

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.logo_move}>
                <Logo />
            </div>
            <Links />
            <Service />
            <SocialMedia />
        </footer>
    )
}
export default Footer;