import React from 'react';
import PropTypes from 'prop-types';
import style from './EditButton.module.css';
import { ReactComponent as Edit } from '../../../../assets/icons/edit-24px.svg';

const EditButton = ({ task, onClick, TaskToEditMode, PopUpCreateOpen }) => (
  <button
    type="button"
    className={style.EditBtn}
    onClick={() => {
      onClick();
      TaskToEditMode(task);
      PopUpCreateOpen();
      // taskPopUpCreate must be closed on click
    }}
  >
    <Edit />
  </button>
);

EditButton.propTypes = {
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
  onClick: PropTypes.func.isRequired,
  TaskToEditMode: PropTypes.func.isRequired,
  PopUpCreateOpen: PropTypes.func.isRequired,
};

export default EditButton;
