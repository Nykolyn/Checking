import React from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import style from './Card.module.css';
// import roleStyleSelectHelper from '../../../helpers/roleStyleSelectHelper';

const p = {
  priority: 1,
};

const Card = () => (
  <section className={style.cardSection}>
    <header className={style.cardHeaderNone}>
      <p className={style.cardHeader__role} />
      <p className={style.cardHeader__priority}>{p.priority}</p>
    </header>
    {/* <header className={style.cardHeaderNone}>
      {/* <p className={style.cardHeader__role}> Role </p> */}
    {/* {task.role} */}
    {/* <p className={style.cardHeader__priority1}> 1 </p> */}
    {/* </header> */}
    {/* {roleStyleSelectHelper(task.role, task.priority)} */}
    <div className={style.cardBody}>
      <p className={style.cardBody__title}>
        {/* {title} */}
        {/* {task.title.length > 46
          ? `${task.title.trim().slice(0, 45)}...`
          : task.title} */}
      </p>
      <p className={style.cardBody__text}>
        {/* {text} */}
        {/* {task.text.length > 110
          ? `${task.text.trim().slice(0, 109)}...`
          : task.text} */}
      </p>
    </div>
    <footer className={style.cardFooter}>
      <div className={style.cardFooter__wrap}>
        <p className={style.cardFooter__dateTime}>
          Oct 10, 2020 | 06.00 - 09.00
          {/* {task.date}|{task.time} */}
        </p>
      </div>
      <div>
        <EditButton />
        <DoneButton />
      </div>
    </footer>
  </section>
);

export default Card;

// class Card extends Component {
//   state = {
//     propsRole: 'Learner',
//     title: 'Title with many - many symbols, many - many realy',
//     text:
//       'Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb)',
//   };

//   render() {
//     const { propsRole, title, text } = this.state;
//     // console.log(title.length, text.length);
//     let role;
//     if (propsRole === 'Learner') {
//       role = <p className={style.cardHeader__roleLearner}> Learner </p>;
//     }
//     return (

//   }
// }

// export default Card;
