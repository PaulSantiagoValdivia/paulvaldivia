import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import EmojiDesktop from '../desktop-carousel/EmojiDeskp';
import EmojiMobile from '../mobile-carousel/EmojiMobile';

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(0); // Inicializar con 0

  useEffect(() => {
    // Función para actualizar el ancho de la ventana cuando cambie el tamaño
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Limpieza: remover el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowCarousel = windowWidth >= 970; // Cambiar este valor según tus necesidades

  return (
    <div className={styles.contentProjects}>
      <div className={styles.projects}>Mis proyectos</div>
      <h2 className={styles.contentTitle}>EmojiAPP</h2>
      <p className={styles.description}>
        Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
      </p>
      {shouldShowCarousel ? <EmojiDesktop /> : <EmojiMobile />}
      <div className={styles.projects}></div>
      <h2 className={styles.contentTitle}>LaConstru</h2>
      <p className={styles.description}>
        Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
      </p>
      {shouldShowCarousel ? <EmojiDesktop /> : <EmojiMobile />}
    </div>
  );
}
