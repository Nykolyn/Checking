// /* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './EditButton.module.css';
import { ReactComponent as Edit } from '../../../../assets/icons/edit-24px.svg';
import { taskPopUpEditOpen } from '../../../../redux/componentController/componentActions';
import { putTaskToEditMode } from '../../../../redux/tasks/taskActions';

const EditButton = ({ task, onClick, TaskToEditMode }) => (
  <button
    type="button"
    className={style.EditBtn}
    onClick={() => {
      onClick();
      TaskToEditMode(task);
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
};

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
  TaskToEditMode: task => dispatch(putTaskToEditMode(task)),
});

export default connect(
  null,
  mDtP,
)(EditButton);
