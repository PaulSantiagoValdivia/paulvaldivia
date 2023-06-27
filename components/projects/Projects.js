import React, { useState, useRef, useEffect } from 'react';
import styles from './projects.module.css';
import Next from '@/assets/Next';
import Preview from '@/assets/Preview';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const handleImageLoad = () => {
      if (carouselRef.current) {
        const image = carouselRef.current.querySelector(`img:nth-child(${currentIndex + 1})`);
        if (image) {
          setImageWidth(image.offsetWidth);
          console.log(imageWidth);
          console.log(currentIndex);
        }
      }
    };

    handleImageLoad(); // Llamamos a la función para obtener el ancho inicial de la imagen

    window.addEventListener('load', handleImageLoad);

    return () => {
      window.removeEventListener('load', handleImageLoad);
    };
  }, [currentIndex]);

  useEffect(() => {
    // Actualizar el desplazamiento cuando el ancho de la imagen cambie
    carouselRef.current.style.transform = `translateX(-${currentIndex === 0 ? 0 : (currentIndex + 2.774) * imageWidth}px)`;
  }, [currentIndex, imageWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handlePreview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };


  return (
    <>
      <div className={styles.contentProjects}>
        <div className={styles.projects}>Mis proyectos</div>
        <h2 className={styles.contentTitle}>EmojiAPP</h2>
        <p className={styles.description}>
          Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.
        </p>
        <div className={styles.contentButtons}>
          <button className={styles.page}>Ir a la página web</button>
          <button className={styles.github}>Ir al repositorio en GitHub</button>
          <p className={styles.count}>{currentIndex}</p>
          <button className={styles.preview} onClick={handlePreview}>
            <Preview />
          </button>
          <button className={styles.next} onClick={handleNext}>
            <Next />
          </button>
        </div>
        <div className={styles.carouselContainer}>
          <div ref={carouselRef} className={styles.carousel}>
            <img
              src="app.png"
              alt="Image 1"
              className={`${styles.carouselImage} ${currentIndex === 0 ? '' : styles.imgInactive}`}
            />

            <img
              src="mobile.png"
              alt="Image 2"
              className={`${styles.carouselImage} ${currentIndex === 1 ? '' : styles.imgInactive}`}
            />

            <img
              src="mobile.png"
              alt="Image 3"
              className={`${styles.carouselImage} ${currentIndex === 2 ? '' : styles.imgInactive}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
