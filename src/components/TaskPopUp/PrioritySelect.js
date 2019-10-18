import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskPopUp.module.css';

const PrioritySelect = () => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Priority</h4>
    <div className={styles.priorityDiv}>
      <button type="button" className={styles.highPriorityBtn}>
        1
      </button>
      <button type="button" className={styles.lowPriorityBtn}>
        2
      </button>
    </div>
  </div>
);

export default PrioritySelect;
