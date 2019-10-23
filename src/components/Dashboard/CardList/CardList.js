/*eslint-disable*/
import React from 'react';
import Card from './Card/Card';
import styles from '../CardList/CardList.module.css';

const CardList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {/* <ul>
        {items.map(el => (
          <li key={el.id}>
            <Card {...el} />
          </li>
        ))}
      </ul> */}
      <ul className={styles.cardList}>
        <li className={styles.cardItem}> card</li>
        <li className={styles.cardItem}> card</li>
        <li className={styles.cardItem}> card</li>
        <li className={styles.cardItem}> card</li>
        <li className={styles.cardItem}> card</li>
      </ul>
    </div>
  );
};

export default CardList;
