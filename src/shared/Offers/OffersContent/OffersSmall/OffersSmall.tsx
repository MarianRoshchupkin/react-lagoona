import React from "react";
import styles from './offerssmall.module.css';
import {DetailsArrow} from "../../../Icons/DetailsArrow";

interface OffersSmallProps {
  image: HTMLImageElement,
  title: string;
  price: string;
}

export function OffersSmall({ image, title, price }: OffersSmallProps) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.price}>от {price} ₽</span>
      <a className={styles.link}>
        <span className={styles.linkDesc}>Подробнее</span>
        <span className={styles.linkImg}><DetailsArrow /></span>
      </a>
    </div>
  );
}
