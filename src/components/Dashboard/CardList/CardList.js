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

// const task = {
//   role: 'Learner',
//   time: 'All Day',
//   priority: 2,
//   isComplete: false,
//   _id: '5db19fb87f221a047b82f150',
//   date: '2019-10-29T21:00:00.000Z',
//   title:
//     'testtesttes ttesttes  ttest  testtesttest testtesttesttest test test test test test test test test ',
//   description:
//     'description description description description description description description description description description description description description description description description ',
//   userId: '5dacf2074a4c8a1b350d7bbe',
//   createdAt: '2019-10-24T12:57:28.740Z',
//   updatedAt: '2019-10-24T12:57:28.740Z',
//   __v: 0,
// };
