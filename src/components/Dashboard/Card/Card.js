import React, { Component } from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import style from './Card.module.css';

class Card extends Component {
  state = {
    propsRole: 'Learner',
    title: 'Title with many - many symbols, many - many realy',
    text:
      'Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb)',
  };

  render() {
    const { propsRole, title, text } = this.state;
    // console.log(title.length, text.length);
    let role;
    if (propsRole === 'Learner') {
      role = <p className={style.cardHeader__roleLearner}> Learner </p>;
    }
    return (
      <section className={style.cardSection}>
        <header className={style.cardHeaderNone}>
          {/* <p className={style.cardHeader__role}> Role </p> */}
          {role}
          <p className={style.cardHeader__priorityOne}> 1 </p>
        </header>
        <div className={style.cardBody}>
          <p className={style.cardBody__title}>
            {title.length > 46 ? `${title.trim().slice(0, 45)}...` : title}
          </p>
          <p className={style.cardBody__text}>
            {text.length > 110 ? `${text.trim().slice(0, 109)}...` : text}
          </p>
        </div>
        <footer className={style.cardFooter}>
          <div className={style.cardFooter__wrap}>
            <p className={style.cardFooter__dateTime}>
              Oct 10, 2020 | 06.00 - 09.00
              {/* {date}|{time} */}
            </p>
          </div>
          <div>
            <EditButton />
            <DoneButton />
          </div>
        </footer>
      </section>
    );
  }
}

export default Card;
