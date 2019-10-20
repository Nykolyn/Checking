import React, { Component } from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import style from './Card.module.css';

class Card extends Component {
  state = {
    title: 'I houped that this will be long enougth title',
  };

  handleTitleLenght = title => {
    let shortTitle;
    if (title.lenght > 30) {
      shortTitle = title.trim().slice(0, 29);
    }
    return `${shortTitle}...`;
  };

  render() {
    const { title } = this.state;
    return (
      <section className={style.cardSection}>
        <header className={style.cardHeader}>
          <p className={style.cardHeader__role}> Role </p>{' '}
          <p className={style.cardHeader__priority}> 1 </p>{' '}
        </header>{' '}
        <div className={style.cardBody}>
          <p className={style.cardBody__title}>
            {' '}
            {this.handleTitleLenght(title)}{' '}
          </p>{' '}
          <p className={style.cardBody__text}> Body text(60 symb) </p>{' '}
        </div>{' '}
        <footer className={style.cardFooter}>
          <div className={style.cardFooter__wrap}>
            <p className={style.cardFooter__dateTime}> Date | Time </p>{' '}
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
