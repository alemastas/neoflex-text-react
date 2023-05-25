import React from 'react';
import Logo from './logo/Logo'
import Indicator from './indicator/Indicator'
import styles from './header.module.scss'

function Header(){
    return(
        <header className={styles.header}>
            <Logo />
            <Indicator />
          </header>
          
    )
}

export default Header;