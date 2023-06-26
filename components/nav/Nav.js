import styles from './nav.module.css'
export default function Nav(){
  return (
  <nav className={styles.navContent}>
    <div className={styles.name}> 
      SANTIAGO V
    </div>
    <div className={styles.navContentRight}>
    <div className={styles.git}>Github</div>
    <div className={styles.contact}>Contactame</div>
    </div>
  </nav>
  );
}