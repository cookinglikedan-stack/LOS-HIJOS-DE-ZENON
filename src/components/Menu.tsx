import React from 'react';
import { menuData } from '../data/menuData';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.container}>
        {menuData.map((item) => (
          <React.Fragment key={item.id}>
            {item.separatorType === 'divider' && (
              <div className={styles.divider}>
                <span>🌶️</span>
              </div>
            )}
            <div className={styles.menuItem}>
              <div className={styles.header}>
                <h3 className={styles.name}>{item.name}</h3>
                <div className={styles.priceContainer}>
                  {item.variants ? (
                    item.variants.map((v, idx) => (
                      <span key={idx} className={styles.variant}>
                        <span className={styles.variantLabel}>{v.label}:</span> {v.price}
                      </span>
                    ))
                  ) : (
                    <span className={styles.price}>{item.price}</span>
                  )}
                </div>
              </div>
              {item.description && <p className={styles.description}>{item.description}</p>}
              {item.notes && <p className={styles.notes}>{item.notes}</p>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Menu;
