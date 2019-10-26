import React from 'react';
import EditButton from './EditButton/EditButton';
import DoneButton from './DoneButton/DoneButton';
import {
  roleStyleSelect,
  priorityStyleSelect,
  titleSlicer,
  descriptionSlicer,
  dateFormatter,
} from '../../../helpers/cardFuncHelper';
import style from './Card.module.css';

const Card = ({ task }, inDoneTab, inBudnedOutTab) => {
  return (
    <section className={style.cardSection}>
      <header style={roleStyleSelect(task.role)}>
        <p className={style.cardHeader__role}>{task.role}</p>
        <p style={priorityStyleSelect(task.priority)}>{task.priority}</p>
      </header>
      <div className={style.cardBody}>
        <p className={style.cardBody__title}>{titleSlicer(task.title)}</p>
        <p className={style.cardBody__text}>
          {descriptionSlicer(task.description)}
        </p>
      </div>
      <footer className={style.cardFooter}>
        <div className={style.cardFooter__wrap}>
          <p className={style.cardFooter__dateTime}>
            {dateFormatter(task.date)} | {task.time}
          </p>
        </div>
        <div>
          {!inDoneTab && <EditButton task={task} />}
          <DoneButton inBudnedOutTab={inBudnedOutTab} />
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
