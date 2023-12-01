import React from 'react';
import styles from './offers.module.css';
import {Title} from "../Title";
import {OffersContent} from "./OffersContent";

export function Offers() {
  return (
    <section className={styles.offers}>
      <div className={styles.container}>
        <Title text="Спецпредложения" />
        <OffersContent />
      </div>
    </section>
  );
}
