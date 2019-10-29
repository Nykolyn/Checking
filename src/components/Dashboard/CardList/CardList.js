/*eslint-disable*/
import React from 'react';
import Card from '../Card/Card';
import styles from '../CardList/CardList.module.css';

const CardList = ({ cardItems }) => {
  return (
    <div>
      <ul className={styles.cardList}>
        {cardItems.map(el => (
          <li className={styles.cardItem} key={el._id}>
            <Card task={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
