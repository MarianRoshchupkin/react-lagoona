import React from 'react';
import styles from './offerscontent.module.css';
import CardSmallFirst from '../../../assets/images/offer1.png';
import CardSmallSecond from '../../../assets/images/offer2.png';
import CardBigFirst from '../../../assets/images/offer3.png';
import {OffersSmall} from "./OffersSmall";
import {OffersBig} from "./OffersBig";

interface IElement {
  className: string;
  image: HTMLImageElement,
  title: string;
  price: string;
}

const elements: IElement[] = [
  {
    className: 'cardSmallFirst',
    image: CardSmallFirst,
    title: "Мальдивские острова",
    price: "55 000"
  },
  {
    className: 'cardSmallSecond',
    image: CardSmallSecond,
    title: "Горящий тур на остров Крит",
    price: "30 000"
  },
  {
    className: 'cardBigFirst',
    image: CardBigFirst,
    title: "Номера категории люкс",
    price: "5 000"
  }
];

export function OffersContent() {
  return (
    <div className={styles.container}>
      {elements.map((element) => (
        <div className={styles[`${element.className}`]} key={element.className}>
          {element.image === CardBigFirst
            ? <OffersBig
                image={element.image}
                title={element.title}
                price={element.price}
              />
            : <OffersSmall
                image={element.image}
                title={element.title}
                price={element.price}
              />
          }
        </div>
      ))}
    </div>
  );
}
