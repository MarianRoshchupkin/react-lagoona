import React from 'react';
import styles from './button.module.css';

interface IButtonProps {
  text: string;
}

export function Button({ text }: IButtonProps) {
  return (
    <button className={styles.button}>
      <span className={styles.desc}>{text}</span>
    </button>
  );
}
