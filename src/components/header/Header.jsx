import React from 'react';
import Logo from './../logo/Logo'
import Indicator from './indicator/Indicator'
import styles from './header.module.scss'

function Header({count, setCount}){
    return(
        <header className={styles.header}>
            <Logo />
            <Indicator count={count} setCount={setCount} />
          </header>
          
    )
}

export default Header;