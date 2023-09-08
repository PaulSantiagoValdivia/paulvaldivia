import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import EmojiDesktop from '../desktop-carousel/EmojiDeskp';
import EmojiMobile from '../mobile-carousel/EmojiMobile';
import BoliviaMarketDesktop from '../desktop-carousel/BoliviaMarketDeskp.';
import BoliviaMarketMobile from '../mobile-carousel/BoliviaMarketMobile';
import ZoonDesktop from '../desktop-carousel/ZoonDesktop';
import ZoonMobile from '../mobile-carousel/ZoonMobile';

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const shouldShowCarousel = windowWidth >= 970; 
  return (
    <div className={styles.contentProjects}>
      <div className={styles.projects}>Mis proyectos</div>
      <h2 className={styles.contentTitle}>Zoon</h2>
      <p className={styles.description}>
        Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
      </p>
      {shouldShowCarousel ? <ZoonDesktop /> : <ZoonMobile />}
      <div className={styles.projects}></div>
      <h2 className={styles.contentTitle}>BoliviaMarket</h2>
      <p className={styles.description}>
        Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
      </p>
      {shouldShowCarousel ? <BoliviaMarketDesktop/> : <BoliviaMarketMobile />}
      <div className={styles.projects}></div>
      <h2 className={styles.contentTitle}>EmojiAPP</h2>
      <p className={styles.description}>
        Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
      </p>
      {shouldShowCarousel ? <EmojiDesktop /> : <EmojiMobile />}
    </div>
  );
}
