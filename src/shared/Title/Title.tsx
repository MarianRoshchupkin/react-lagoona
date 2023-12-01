import React from 'react';
import styles from './title.module.css';

interface ITitleProps {
  text: string;
}

export function Title({ text }: ITitleProps) {
  return (
    <h2 className={styles.title}>{text}</h2>
  );
}
