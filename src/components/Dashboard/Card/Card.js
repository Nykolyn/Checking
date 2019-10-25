import React from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import {
  roleStyleSelect,
  priorityStyleSelect,
} from '../../../helpers/cardStyleSwitchHelper';
import style from './Card.module.css';

const Card = ({ task }) => {
  return (
    <section className={style.cardSection}>
      <header style={roleStyleSelect(task.role)}>
        <p className={style.cardHeader__role}>{task.role}</p>
        {task.priority < 3 ? (
          <p style={priorityStyleSelect(task.priority)}>{task.priority}</p>
        ) : null}
      </header>
      <div className={style.cardBody}>
        <p className={style.cardBody__title}>
          {/* {task.title} */}
          {/* {title} */}
          {task.title.length > 50
            ? `${task.title.trim().slice(0, 49)}...`
            : task.title}
        </p>
        <p className={style.cardBody__text}>
          {/* {task.description} */}
          {task.description.length > 100
            ? `${task.description.trim().slice(0, 100)}...`
            : task.description}
        </p>
      </div>
      <footer className={style.cardFooter}>
        <div className={style.cardFooter__wrap}>
          <p className={style.cardFooter__dateTime}>
            {/* Oct 10, 2020 | 06.00 - 09.00 */}
            {task.date}|{task.time}
          </p>
        </div>
        <div>
          <EditButton task={task} />
          <DoneButton />
        </div>
      </footer>
    </section>
  );
};

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
