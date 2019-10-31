import React from 'react';
import PropTypes from 'prop-types';
import EditButton from './EditButton/EditButtonContainer';
import DoneButton from './DoneButton/DoneButtonContainer';
import {
  roleStyleSelect,
  priorityStyleSelect,
  titleSlicer,
  descriptionSlicer,
  dateFormatter,
} from '../../../helpers/cardFuncHelper';
import style from './Card.module.css';
import taskTypes from '../../../constants/taskTypes';
import defineDispatcher from '../../../helpers/dispatchHelper';

const Card = ({ task }) => (
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
      <div className={style.cardFooter__btnWrapper}>
        {!task.isComplete && <EditButton task={task} />}
        <DoneButton
          task={task}
          inBurnedOutTab={defineDispatcher(task) === taskTypes.BURNED}
          inDoneTab={task.isComplete}
        />
      </div>
    </footer>
  </section>
);

Card.propTypes = {
  task: PropTypes.shape({
    role: PropTypes.string,
    time: PropTypes.string,
    priority: PropTypes.number,
    isComplete: PropTypes.bool,
    _id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
};

export default Card;
