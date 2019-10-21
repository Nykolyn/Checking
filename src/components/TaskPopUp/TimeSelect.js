import React from 'react';
// import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import Select from 'react-select';
import timeStyles from '../../helpers/timeSelectStylesHelper';
import timeRanges from '../../constants/timeRanges';
import styles from './TaskPopUp.module.css';

const TimeSelect = () => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Time</h4>
    <Select options={timeRanges} styles={timeStyles} />
  </div>
);
export default TimeSelect;
