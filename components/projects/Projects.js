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


  const shouldShowCarousel = windowWidth >= 1224;
  return (
    <div className={styles.contentProjects}>
      <div className={styles.projects}>Mis proyectos</div>
      <h2 className={styles.contentTitle}>Zoon</h2>
      <p className={styles.description}>
        Proyecto Freelance: Contribuí en el desarrollo de toda la aplicación aprovechando las tecnologías React, Next.js y Supabase, implementé la autenticación a través de Gmail o Magic Link para la página de inicio de sesión, habilité la integración con Discord, permitiendo a los usuarios acceder a funciones exclusivas, y trabajé en estrecha colaboración con el diseñador.
      </p>
      {shouldShowCarousel ? <ZoonDesktop /> : <ZoonMobile />}
      <div className={styles.projects}></div>
      <h2 className={styles.contentTitle}>EmojiAPP</h2>
      <p className={styles.description}>
        ¡Crea un perfil único con emojis en nuestra plataforma! Inicia sesión con Discord, elige tu secuencia de emojis y completa tu perfil personalizado con nombre, descripción e imagen. ¡Destaca con tu identidad única en tu propia página de usuario!
      </p>
      {shouldShowCarousel ? <EmojiDesktop /> : <EmojiMobile />}
      <div className={styles.projects}></div>
      <h2 className={styles.contentTitle}>BoliviaMarket</h2>
      <p className={styles.description}>
        Creé un e-commerce en React.js con Next.js y Supabase. Los proveedores tienen autenticación por Magic Link y pueden gestionar productos y personalizar sus catálogos. En la página principal se muestran todos los proveedores y se puede acceder a sus catálogos haciendo clic en el proveedor.</p>
      {shouldShowCarousel ? <BoliviaMarketDesktop /> : <BoliviaMarketMobile />}
    </div>
  );
}
