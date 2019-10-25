/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import style from './EditButton.module.css';
import { ReactComponent as Edit } from '../../../../assets/icons/edit-24px.svg';
import { taskPopUpEditOpen } from '../../../../redux/componentController/componentActions';

const EditButton = ({ task, onClick }) => (
  <button type="button" className={style.EditBtn} onClick={onClick}>
    <Edit />
    {task ? console.log(task) : null}
  </button>
);
// prop => taskinModeEdit

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
});

export default connect(
  null,
  mDtP,
)(EditButton);
