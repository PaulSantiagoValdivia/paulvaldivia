import styles from './footer.module.css'
export default function Footer(){
  return(
    <footer className={styles.contentFooter}>
      <div className={styles.ancors}>
      <a className={styles.init}> inicio</a>
      <a className={styles.projects}>projectos</a>
      <a className={styles.aboutMe}>sobre mi</a>
      </div>
      <p className={styles.p}>Pagina creada por Santiago Valdivia - 2023</p>
    </footer>
  )
}