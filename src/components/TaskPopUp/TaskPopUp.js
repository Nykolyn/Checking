import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import styles from './TaskPopUp.module.css';
import roleStyles from '../../helpers/roleSelectStylesHelper';
import timeStyles from '../../helpers/timeSelectStylesHelper';
import roles from '../../constants/roles';
import timeRanges from '../../constants/timeRanges';

export default class TaskPopUp extends Component {
  state = {
    role: 'None',
  };

  render() {
    const { role } = this.state;
    return (
      <div className={styles.outer}>
        <h3 className={styles.createTaskTitle}>Create Task</h3>
        <div className={styles.helperDiv}>
          <div className={styles.selectContainer}>
            <h4 className={styles.title}>Choose Role</h4>
            <Select options={roles} styles={roleStyles} />
          </div>
          <div className={styles.selectContainer}>
            <h4 className={styles.title}>Date</h4>
            <DatePicker
              className={styles.input}
              value={new Date()}
              format="MM/dd/yyyy"
              locale="en"
            />
          </div>
        </div>
        <div>
          <h4 className={styles.titleTitle}>Title (up to 150 characters)</h4>
          <input className={styles.titleInput} type="text" required />
        </div>
        <div>
          <h4 className={styles.title}>Description (up to 800 characters)</h4>
          <textarea className={styles.textarea} rows={7} />
        </div>
        <div className={styles.flexHelperDiv}>
          <div className={styles.selectContainer}>
            <h4 className={styles.title}>Time</h4>
            <Select options={timeRanges} styles={timeStyles} />
          </div>
          <div className={styles.selectContainer}>
            <h4 className={styles.title}>Priority</h4>
            <div className={styles.priorityDiv}>
              <button type="button" className={styles.priorityBtn}>
                1
              </button>
              <button type="button" className={styles.priorityBtn}>
                2
              </button>
            </div>
          </div>
        </div>
        <div className={styles.btnDiv}>
          <button type="button" className={styles.btn}>
            Cancel
          </button>
          <button type="button" className={styles.acceptBtn}>
            Accept
          </button>
        </div>
      </div>
    );
  }
}
