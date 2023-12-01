import React from 'react';
import styles from './headerinfo.module.css';
import Logo from '../../../assets/images/logo.png';

export function HeaderInfo() {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href="/"><img src={Logo} alt="Лого" /></a>
      <a className={styles.tel} href="tel:+74953225448">+7 495 322-54-48</a>
      <a className={styles.login}>
        <span className={styles.loginImg}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.59 7.41L15.17 11H1V13H15.17L11.58 16.59L13 18L19 12L13 6L11.59 7.41ZM20 6V18H22V6H20Z" fill="#CC9933"/>
          </svg>
        </span>
        <span className={styles.loginDesc}>Личный кабинет</span>
      </a>
    </div>
  );
}
