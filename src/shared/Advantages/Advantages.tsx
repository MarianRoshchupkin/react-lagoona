import React, {ReactNode} from 'react';
import styles from './advantages.module.css';
import {BathIcon} from "../Icons/BathIcon";
import {TowelIcon} from "../Icons/TowelIcon";
import {BatteryIcon} from "../Icons/BatteryIcon";
import {KeyIcon} from "../Icons/KeyIcon";
import {CarIcon} from "../Icons/CarIcon";
import {RingIcon} from "../Icons/RingIcon";
import {SafeIcon} from "../Icons/SafeIcon";
import {PoolIcon} from "../Icons/PoolIcon";
import {AdvantagesCard} from "./AdvantagesCard";
import {Title} from "../Title";

interface ICard {
  image: ReactNode;
  text: string;
}

const cards: ICard[] = [
  {
    image: <BathIcon />,
    text: "Идейные соображения высшего порядка, а также постоянный количественный рост"
  },
  {
    image: <TowelIcon />,
    text: "Значимость этих проблем настолько очевидна, что вопрос остаётся открытым"
  },
  {
    image: <BatteryIcon />,
    text: "Таким образом реализация плановых заданий играет важную роль для понимания"
  },
  {
    image: <KeyIcon />,
    text: "Повседневная практика показывает, что сложившаяся структура организации"
  },
  {
    image: <CarIcon />,
    text: "Равным образом рамки и место обучения кадров способствует подготовки сотрудника"
  },
  {
    image: <RingIcon />,
    text: "Консультация с активом влечёт за собой процесс внедрения услуг нашего сервиса"
  },
  {
    image: <SafeIcon />,
    text: "Повседневная практика показывает, что дальнейшее развитие различных "
  },
  {
    image: <PoolIcon />,
    text: "Значимость этого настолько очевидна, что консультация наших экспертов помогает"
  }
]

export function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <Title text="Приемущества" />
        <div className={styles.wrapper}>
          {cards.map((card) =>
            <AdvantagesCard image={card.image} text={card.text} key={card.text} />
          )}
        </div>
      </div>
    </section>
  );
}
