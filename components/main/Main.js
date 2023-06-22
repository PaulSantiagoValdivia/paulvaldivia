import styles from './main.module.css'
import Icon from '@/assets/Icon'
import Img from '@/assets/vector.png'
import Image from 'next/image'
export default function Main() {

  return (
    <>
      <div className={styles.contentTitle}>
        <h1 className={styles.title} >SOY FRONTEND DEVELOPER</h1>
      </div>
      <div className={styles.info}>
        <p className={styles.presentation}>  <span className={styles.hola}>Hola! 👋</span>, Soy Santiago y me gusta escribir codigo. </p>
        <p className={styles.tecnologies}>Mi stack favorito es React usando Next.js con styled components <br />
          y supabase como base de datos.</p>
        <button className={styles.ancor}>Ver mis proyectos <Icon /></button>
        <div className={styles.banner} >
          <Image src={Img} alt="Banner"/>
        </div>

      </div>
    </>
  )
}
