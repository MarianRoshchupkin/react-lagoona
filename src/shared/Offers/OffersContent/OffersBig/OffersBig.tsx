import React from 'react';
import styles from './offersbig.module.css';
import {DetailsArrow} from "../../../Icons/DetailsArrow";

interface IOffersBigProps {
  image: HTMLImageElement,
  title: string;
  price: string;
}

export function OffersBig({ image, title, price }: IOffersBigProps) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.price}>от {price}</span>
      <a className={styles.link}>
        <span className={styles.linkDesc}>Подробнее</span>
        <span className={styles.linkImg}><DetailsArrow /></span>
      </a>
    </div>
  );
}
