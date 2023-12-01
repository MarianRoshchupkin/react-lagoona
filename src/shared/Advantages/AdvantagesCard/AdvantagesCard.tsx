import React, {ReactNode} from 'react';
import styles from './advantagescard.module.css';

interface IAdvantageCardProps {
  image: ReactNode;
  text: string;
}

export function AdvantagesCard({ image, text }: IAdvantageCardProps) {
  return (
    <div className={styles.container}>
      <span className={styles.logo}>{image}</span>
      <p className={styles.desc}>{text}</p>
    </div>
  );
}
