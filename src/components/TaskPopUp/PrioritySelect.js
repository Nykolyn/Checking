import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskPopUp.module.css';

const PrioritySelect = ({ onClick }) => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Priority</h4>
    <div
      className={styles.priorityDiv}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <button
        data-priority="1"
        type="button"
        className={styles.highPriorityBtn}
      >
        1
      </button>
      <button data-priority="2" type="button" className={styles.lowPriorityBtn}>
        2
      </button>
    </div>
  </div>
);

PrioritySelect.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PrioritySelect;
