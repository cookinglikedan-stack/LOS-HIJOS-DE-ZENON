import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Los Hijos de Zenón</h1>
        <p className={styles.subtitle}>Tradición y Sabor de la Tierra Caliente</p>
        <div className={styles.divider}>
          <span>🌶️</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
