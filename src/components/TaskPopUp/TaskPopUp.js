import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import DateSelect from './DateSelect';
import RoleSelect from './RoleSelect';
import TimeSelect from './TimeSelect';
import PrioritySelect from './PrioritySelect';
import roles from '../../constants/roles';
import timeRanges from '../../constants/timeRanges';
import styles from './TaskPopUp.module.css';

export default class TaskPopUp extends Component {
  state = {
    role: roles[4],
    date: new Date(),
    title: '',
    description: '',
    time: timeRanges[4],
    priority: null,
  };

  handleRoleSelect = value => this.setState({ role: value });

  handleDateChange = date => this.setState({ date });

  handleTextInput = ({ target: { value, name } }) => {
    if (
      (name === 'title' && value.length > 150) ||
      (name === 'description' && value.length > 800)
    ) {
      return;
    }

    this.setState({ [name]: value });
  };

  handleTimeSelect = value => this.setState({ time: value });

  handlePrioritySelect = ({ target }) =>
    this.setState({ priority: target.getAttribute('data-priority') });

  handleSubmit = e => {
    e.preventDefault();
    const { role, date, title, description, time, priority } = this.state;
    if (!title.length) {
      toast.error('Enter a title!');
    }
  };

  reset = () =>
    this.setState({
      role: roles[4],
      date: new Date(),
      title: '',
      description: '',
      time: timeRanges[4],
      priority: null,
    });

  render() {
    const { role, date, title, description, time } = this.state;
    return (
      <form className={styles.outer}>
        <h3 className={styles.createTaskTitle}>Create Task</h3>
        <div className={styles.helperDiv}>
          <RoleSelect value={role} onChange={this.handleRoleSelect} />
          <DateSelect value={date} onChange={this.handleDateChange} />
        </div>
        <h4 className={styles.titleTitle}>Title (up to 150 characters)</h4>
        <input
          name="title"
          value={title}
          className={styles.titleInput}
          type="text"
          placeholder="Write title"
          required
          onChange={this.handleTextInput}
        />
        <h4 className={styles.title}>Description (up to 800 characters)</h4>
        <textarea
          name="description"
          value={description}
          className={styles.textarea}
          placeholder="Your description"
          rows={10}
          onChange={this.handleTextInput}
        />
        <div className={styles.flexHelperDiv}>
          <TimeSelect value={time} onChange={this.handleTimeSelect} />
          <PrioritySelect onClick={this.handlePrioritySelect} />
        </div>
        <div className={styles.btnDiv}>
          <button type="button" className={styles.btn}>
            Cancel
          </button>
          <button
            type="submit"
            className={styles.acceptBtn}
            onClick={this.handleSubmit}
          >
            Accept
          </button>
        </div>
      </form>
    );
  }
}
