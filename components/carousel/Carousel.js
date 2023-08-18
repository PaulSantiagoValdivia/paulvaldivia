import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const Carousel = () => {

  const [images, setImages] = useState([
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    // Agrega las rutas de las demás imágenes
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        const lastImage = prevImages[prevImages.length - 1];
        return [lastImage, ...prevImages.slice(0, prevImages.length - 1)];
      });
    }, 2000);

  }, []);

  const handleImageLoad = (event, index) => {
    if (index !== 17) {
      event.target.classList.add(styles.rotate);

    } else {
      event.target.classList.add(styles.ultimo);

    }


  };

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={`/${image}`} // Asegúrate de que la carpeta "images" esté correctamente ubicada dentro de la carpeta "public"
          className={`${styles.slide}  `}
          alt={`Imagen ${index + 1}`}
          onLoad={(event) => handleImageLoad(event, index)}
        />
      ))}
    </div>
  );
};

export default Carousel;
