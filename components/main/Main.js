import styles from './main.module.css'
import Icon from '@/assets/Icon'

export default function Main() {

  return (
  <div className={styles.mainCointainer}>
    <div className={styles.left}></div>
    <div className={styles.right}></div>
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
        <div className={styles.banner}>
        <button className={styles.ancor}>Ver mis proyectos<Icon/></button>
      </div>
          <img className={styles.img2} src="/vector.png" alt="Imagen vector" />
        </div>
    </div>
  );
}
