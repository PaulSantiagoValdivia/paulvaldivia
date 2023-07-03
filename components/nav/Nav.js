import { useState } from 'react';
import Modal from 'react-modal';
import styles from './nav.module.css';
import Menu from '@/assets/Menu';
export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className={styles.navContent}>
      <div className={styles.name}>
        SANTIAGO V
      </div>
      <div className={`${styles.navContentRight} ${styles.desktopOnly}`}>
        <div className={styles.git}>Github</div>
        
        <div className={styles.contact}>Contactame</div>
      </div>
      <button className={`${styles.mobileOnly}`} onClick={() => setModalOpen(true)}>
      <i> <Menu/></i>
      </button>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} className={styles.modal} overlayClassName={styles.overlay}>
        <div className={styles.modalContent}>
          <div className={styles.git}>Github</div>
          <div className={styles.contact}>Contactame</div>
        </div>
      </Modal>
    </nav>
  );
}
