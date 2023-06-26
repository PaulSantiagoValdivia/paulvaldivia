import styles from './projects.module.css'
import Next from '@/assets/Next'
import Preview from '@/assets/Preview'
export default function Projects () {
  return(
    <>
    <div className={styles.contentProjects}>
    <div className={styles.projects}>Mis proyectos</div>
      <h2 className={styles.contentTitle}>EmojiAPP</h2>
      <p className={styles.description}>Connect all your social media and web3 links in one place, Mint them as an NFTs and own them forever.</p>
      <div className={styles.contentButtons}>
        <button className={styles.page}>Ir a la pagina web</button>
        <button className={styles.github}>Ir al repositorio en github</button>
        <p className={styles.count}>0</p>
        <button className={styles.preview}><Preview/></button>
        <button className={styles.next}><Next/></button>
      </div>
    </div>
    </>
  )
}