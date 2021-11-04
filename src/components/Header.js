import React, {useState, useEffect} from 'react'
import BannerImg from './images/Banner.png'
import styles from './Header.module.css'

const menus =[
  {
    url: '#',
    title: '$PLV'
  },
  {
    url: '#',
    title: 'Marketplace'
  },
  {
    url: '#',
    title: 'Whitepaper'
  }
]

function Header() {

  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches ? (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src={BannerImg} />
        </div>
        <nav className={styles.nav}>
          <ul>
            {menus.map(menu => (
              <li key={menu.url}><a href="#">{menu.title}</a></li>
            ))}
          </ul>
        </nav>
    </header>
  ) : (
    <>
  <header className="MobileNavigationWrapper">
  <nav className="Navigation">
      <div className={[styles.logo, 'logo'].join(' ')}>
          <img src={BannerImg} />
        </div>
  <div className={['Overlay', menuOpened ? 'Overlay--on': ''].join(' ')}>
    <ul className="Navigation-list">
      
    {menus.map(menu => (
              <li key={menu.url}><a href="#">{menu.title}</a></li>
            ))}
    </ul>
  </div>
  <section className="Navigation--collapsed" onClick={() => setMenuOpened(!menuOpened)}>
    <div className={['BurgerMenu', menuOpened ? 'BurgerMenu--on' : ''].join(' ')}></div>
  </section>
</nav>
</header>
<div className="MobileNavigationWrapperSep"></div>
</>
)
}

export default Header
