import React, { Component } from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import style from './Card.module.css';

class Card extends Component {
  state = {
    title: 'Title with many - many symbols, many - many realy',
    text:
      'Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb)',
  };

  render() {
    const { title, text } = this.state;
    // console.log(title.length, text.length);

    return (
      <section className={style.cardSection}>
        <header className={style.cardHeader}>
          <p className={style.cardHeader__role}> Role </p>{' '}
          <p className={style.cardHeader__priorityOne}> 1 </p>{' '}
        </header>{' '}
        <div className={style.cardBody}>
          <p className={style.cardBody__title}>
            {' '}
            {title.length > 30 ? `${title.trim().slice(0, 29)}...` : title}{' '}
          </p>{' '}
          <p className={style.cardBody__text}>
            {' '}
            {text.length > 60 ? `${text.trim().slice(0, 99)}...` : text}{' '}
          </p>{' '}
        </div>{' '}
        <footer className={style.cardFooter}>
          <div className={style.cardFooter__wrap}>
            <p className={style.cardFooter__dateTime}>
              {' '}
              Oct 10, 2020 | 06.00 - 09.00{' '}
            </p>{' '}
          </div>{' '}
          <div>
            <EditButton />
            <DoneButton />
          </div>{' '}
        </footer>{' '}
      </section>
    );
  }
}

export default Card;
