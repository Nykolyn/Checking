/*eslint-disable*/
import React from 'react';
import Card from '../Card/Card';

const CardList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ul>
        {items.map(el => (
          <li key={el.id}>
            <Card {...el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
