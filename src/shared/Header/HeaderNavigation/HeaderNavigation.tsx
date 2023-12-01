import React from 'react';
import styles from './headernavigation.module.css';
import {Button} from "../../Button";

export function HeaderNavigation() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="/">О нас</a></li>
        <li className={styles.item}><a className={styles.link} href="/">Услуги</a></li>
        <li className={styles.item}><a className={styles.link} href="/">Преимущества</a></li>
        <li className={styles.item}><a className={styles.link} href="/">Размещение</a></li>
        <li className={styles.item}><a className={styles.link} href="/">Блог</a></li>
        <li className={styles.item}><a className={styles.link} href="/">Контакты</a></li>
      </ul>
      <div className={styles.buttons}>
        <div className={styles.buttonTour}><Button text="Хочу тур" /></div>
        <div className={styles.buttonCall}><Button text="Обратный звонок" /></div>
      </div>
    </div>
  );
}
