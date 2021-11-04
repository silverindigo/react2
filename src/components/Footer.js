import React from 'react'
import styles from './Footer.module.css'
import DiscordIcon from './images/Icons/discord.png'
import FacebookIcon from './images/Icons/fb.png'
import InstagramIcon from './images/Icons/insta.png'
import TelegramIcon from './images/Icons/tel.png'
import TwitterIcon from './images/Icons/twe.png'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.socialIcons}>
          <ul>
            <li> <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a> </li> 
            <li> <a href="https://discord.com"><img src={DiscordIcon} alt="Discord" /></a> </li> 
            <li> <a href="https://instagram.com"><img src={InstagramIcon} alt="InstagramIcon" /></a> </li> 
            <li> <a href="https://facebook.com"><img src={FacebookIcon} alt="FacebookIcon" /></a> </li> 
            <li> <a href="https://telegram.com"><img src={TelegramIcon} alt="TelegramIcon" /></a> </li> 
          </ul>
        </div>
        <br />
        <p className={styles.footerText}>Privacy Policy | Terms & Conditions</p>
    </footer>
  )
}

export default Footer
