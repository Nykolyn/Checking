import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import styles from './TaskPopUp.module.css';

const DateSelect = () => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Date</h4>
    <DatePicker
      className={styles.input}
      value={new Date()}
      format="MM/dd/yyyy"
      locale="en"
    />
  </div>
);

export default DateSelect;
