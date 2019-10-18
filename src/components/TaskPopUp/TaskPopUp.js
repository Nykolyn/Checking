import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateSelect from './DateSelect';
import RoleSelect from './RoleSelect';
import TimeSelect from './TimeSelect';
import PrioritySelect from './PrioritySelect';
import styles from './TaskPopUp.module.css';

export default class TaskPopUp extends Component {
  state = {
    role: 'None',
  };

  render() {
    const { role } = this.state;
    return (
      <form className={styles.outer}>
        <h3 className={styles.createTaskTitle}>Create Task</h3>
        <div className={styles.helperDiv}>
          <RoleSelect />
          <DateSelect />
        </div>
        <h4 className={styles.titleTitle}>Title (up to 150 characters)</h4>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Write title"
          required
        />
        <h4 className={styles.title}>Description (up to 800 characters)</h4>
        <textarea
          className={styles.textarea}
          placeholder="Your description"
          rows={10}
        />
        <div className={styles.flexHelperDiv}>
          <TimeSelect />
          <PrioritySelect />
        </div>
        <div className={styles.btnDiv}>
          <button type="button" className={styles.btn}>
            Cancel
          </button>
          <button type="submit" className={styles.acceptBtn}>
            Accept
          </button>
        </div>
      </form>
    );
  }
}
