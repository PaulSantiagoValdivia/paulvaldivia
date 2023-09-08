import styles from './footer.module.css'
export default function Footer({handleViewStart,handleViewProjects,handleViewAboutMe}){
  return(
    <footer className={styles.contentFooter}>
      <div className={styles.ancors}>
      <a className={styles.init} onClick={handleViewStart}>inicio</a>
      <a className={styles.projects} onClick={handleViewProjects}>proyectos</a>
      <a className={styles.aboutMe} onClick={handleViewAboutMe}>sobre mi</a>
      </div>
      <p className={styles.p}>Pagina creada por Santiago Valdivia - 2023</p>
    </footer>
  )
}