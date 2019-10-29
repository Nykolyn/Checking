import React from 'react';
import PropTypes from 'prop-types';
import styleSelector from '../../../../helpers/DoneBtnStyleSelectHelper';
import style from './DoneButton.module.css';
import { ReactComponent as ThumbUp } from '../../../../assets/icons/thumb_up-24px.svg';

const DoneButton = ({ inDoneTab, inBudnedOutTab }) => (
  <button
    type="button"
    className={style.DoneBtn}
    style={styleSelector(inDoneTab, inBudnedOutTab)}
    onClick={console.log('click')}
  >
    <ThumbUp />
  </button>
);

DoneButton.propTypes = {
  inBudnedOutTab: PropTypes.bool.isRequired,
  inDoneTab: PropTypes.bool.isRequired,
};

export default DoneButton;
