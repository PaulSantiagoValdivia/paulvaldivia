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
        <div className={styles.git} onClick={() => window.open('https://github.com/PaulSantiagoValdivia', '_blank')}>Github</div>
        <div className={styles.contact} onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=paulsantiagovaldivia@gmail.com', '_blank')}>Contactame</div>
      </div>
      <button className={`${styles.mobileOnly}`} onClick={() => setModalOpen(true)}>
        <i> <Menu /></i>
      </button>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} className={styles.modal} overlayClassName={styles.overlay}>
        <div className={styles.modalContent}>
          <div className={styles.git} onClick={() => window.open('https://github.com/PaulSantiagoValdivia', '_blank')}>Github</div>
          <div className={styles.contact} onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=paulsantiagovaldivia@gmail.com', '_blank')}>Contactame</div>
        </div>
      </Modal>
    </nav>
  );
}