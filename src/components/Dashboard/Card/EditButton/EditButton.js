import React from 'react';
import style from './EditButton.module.css';
import { ReactComponent as Edit } from '../../../../assets/icons/edit-24px.svg';

const EditButton = () => (
  <button type="button" className={style.EditBtn}>
    {/* {props.task.something.done ? none : <Edit/>} */}
    <Edit />
  </button>
);
// prop => taskinModeEdit
export default EditButton;
