import React from 'react';
import style from './DoneButton.module.css';
import { ReactComponent as ThumbUp } from '../../../../assets/icons/thumb_up-24px.svg';

const DoneButton = () => (
  <button type="button" className={style.DoneBtn}>
    <ThumbUp />
  </button>
);

export default DoneButton;
