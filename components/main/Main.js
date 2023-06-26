import styles from './main.module.css'
import Icon from '@/assets/Icon'
import Img from '@/public/vector.png'
import Carrusel from '@/public/carrusel.png'

export default function Main() {
  const vector = Img.default; // Accede a la propiedad 'default' del módulo

  return (
    <>
      <div className={styles.contentTitle}>
        <h1 className={styles.title}>SOY FRONTEND DEVELOPER</h1>
      </div>
      <div className={styles.info}>
        <p className={styles.presentation}>
          <span className={styles.hola}>Hola! 👋</span>, Soy Santiago y me gusta escribir codigo.
        </p>
        <p className={styles.tecnologies}>Mi stack favorito es React usando Next.js con styled components
          y supabase como base de datos.
        </p>
        <button className={styles.ancor}>Ver mis proyectos <Icon /></button>
        <div className={styles.banner}>
          <img className={styles.img2} src="/vector.png" alt="Imagen vector" />
        </div>
        <div className={styles.carrusel}>
          <img className={styles.img} src="/carrusel.png" alt="Imagen carrusel" />
        </div>
      </div>
    </>
  );
}
