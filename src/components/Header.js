import React from 'react'
import BannerImg from './images/Banner.png'
import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src={BannerImg} />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">$PLV</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Whitepaper</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
