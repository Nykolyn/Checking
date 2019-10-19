import React from 'react';
import style from './Card.module.css';

const Card = () => (
  <section className={style.cardSection}>
    <header className={style.cardHeader}>
      <p className={style.cardHeader__role}> Role </p>{' '}
      <i className={style.cardHeader__priority}> Priority </i>{' '}
    </header>{' '}
    <div className={style.cardBody}>
      <p className={style.cardBody__title}> Title text(30 symb) </p>{' '}
      <p className={style.cardBody__text}> Body text(60 symb) </p>{' '}
    </div>{' '}
    <footer className={style.cardFooter}>
      <p> Date </p> <p> Time </p> <i> Edit icon </i> <i> Like icon </i>{' '}
    </footer>{' '}
  </section>
);

export default Card;
