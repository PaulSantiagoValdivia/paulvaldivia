import Next from '@/assets/Next';
import Preview from '@/assets/Preview';
import Explorer from '@/assets/Explorer';
import Github from '@/assets/Github';
import styles from '../projects/projects.module.css';
import React, { useState, useRef, useEffect } from 'react';

export default function BoliviaMarketDesktop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const handleImageLoad = () => {
      if (carouselRef.current) {
        const image = carouselRef.current.querySelector(`img:nth-child(${currentIndex + 1})`);
        if (image) {
          setImageWidth(image.offsetWidth);

        }
      }
    };
    handleImageLoad();
    window.addEventListener('load', handleImageLoad);

    return () => {
      window.removeEventListener('load', handleImageLoad);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === 0) {
      carouselRef.current.style.transform = `translateX(-${currentIndex === 0 ? 0 : (currentIndex + 3.138) * imageWidth}px)`;

    } else if (currentIndex === 1) {
      carouselRef.current.style.transform = `translateX(-${currentIndex === 0 ? 0 : (currentIndex + 3.138) * imageWidth}px)`;

    } else if (currentIndex === 2) {

      carouselRef.current.style.transform = `translateX(-${currentIndex === 0 ? 0 : (currentIndex + 3.258) * imageWidth}px)`;
    }
  }, [currentIndex, imageWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handlePreview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };
  return (
    <>
      <div className={styles.contentButtons}>
        <button className={styles.githubDesktop} onClick={() => window.open('https://github.com/PaulSantiagoValdivia/bolivia-market', '_blank')}>
          <Github /> Ir al repositorio en Github
        </button>
        <button className={styles.pageDesktop} onClick={() => window.open('https://boliviamarket.vercel.app/', '_blank')}>
          <Explorer /> Ir a la página web
        </button>
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
            src="boliviaD.gif"
            alt="Image 1"
            className={`${styles.carouselImage} ${currentIndex === 0 ? '' : styles.imgInactive}`}
          />
          <img
            src="boliviamobile.png"
            alt="Image 2"
            className={`${styles.carouselImage} ${currentIndex === 1 ? '' : styles.imgInactive}`}
          />
          <img
            src="boliviaM.png"
            alt="Image 3"
            className={`${styles.carouselImage} ${currentIndex === 2 ? '' : styles.imgInactive}`}
          />
        </div>
      </div>
    </>
  );
}