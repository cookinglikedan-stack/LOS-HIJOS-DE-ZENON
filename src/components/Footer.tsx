import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>© {new Date().getFullYear()} Los Hijos de Zenón</p>
        <div className={styles.divider}>
          <span>🌶️</span>
        </div>
        <p className={styles.text}>Sabor tradicional de Jalisco</p>
      </div>
    </footer>
  );
};

export default Footer;
