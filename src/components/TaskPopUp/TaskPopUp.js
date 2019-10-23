import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as DeleteBtn } from '../../assets/icons/delete_forever-24px.svg';
import DateSelect from './DateSelect';
import RoleSelect from './RoleSelect';
import TimeSelect from './TimeSelect';
import PrioritySelect from './PrioritySelect';
import roles from '../../constants/roles';
import timeRanges from '../../constants/timeRanges';
import defineDispatcher from '../../helpers/dispatchHelper';
import styles from './TaskPopUp.module.css';

export default class TaskPopUp extends Component {
  static defaultProps = {
    taskPopUpCreateOpen: false,
    taskPopUpEditOpen: true,
    tasks: [],
  };

  static propTypes = {
    taskPopUpCreateOpen: PropTypes.bool,
    taskPopUpEditOpen: PropTypes.bool,
    postTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    modalDeleteTaskOpen: PropTypes.func.isRequired,
    tasks: PropTypes.shape({
      todayTomorrow: PropTypes.shape({
        today: PropTypes.arrayOf(PropTypes.object),
        tomorrow: PropTypes.arrayOf(PropTypes.object),
      }),
      nextAfter: PropTypes.shape({
        next: PropTypes.arrayOf(PropTypes.object),
        after: PropTypes.arrayOf(PropTypes.object),
      }),
      taskInEditMode: PropTypes.object,
    }),
  };

  state = {
    role: roles[4],
    date: new Date(),
    title: '',
    description: '',
    time: timeRanges[4],
    priority: 3,
  };

  componentDidMount() {
    const { taskPopUpEditOpen, tasks } = this.props;
    if (taskPopUpEditOpen) {
      const taskToEdit = { ...tasks.taskInEditMode };
      const { role, date, title, description, time, priority } = taskToEdit;
      this.setState({
        role: roles.find(elem => elem.label === role),
        title,
        description,
        time: timeRanges.find(elem => elem.label === time),
        priority,
        date: new Date(date) < new Date() ? new Date() : new Date(date),
      });
    }
  }

  // Don't delete a task before submit
  // If cancel, delete a task from edit mode
  // If accept: if burned out - delete a task from burned out and define new array through update
  // if not burned out - compare date from props with new date
  // if prevDate === new date - dispatch update
  // if prevDate !== new date - delete a task from prevArray and dispatch update

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

  handlePrioritySelect = ({ target }) => {
    const priority = Number(target.getAttribute('data-priority'));
    this.setState(state => ({
      priority: state.priority !== priority ? priority : 3,
    }));
  };

  modalDeleteTaskOpen = () => this.props.modalDeleteTaskOpen();

  handleSubmit = e => {
    e.preventDefault();
    const { role, date, title, description, time, priority } = this.state;
    const {
      postTask,
      updateTask,
      removeTask,
      taskPopUpEditOpen,
      tasks,
    } = this.props;
    if (!title.length) {
      toast.error('Enter a title!');
      return;
    }
    const taskToAdd = {
      role: role.label,
      date: new Date(date).toJSON(),
      title,
      description,
      time: time.label,
      priority,
    };

    console.log(taskToAdd);
    if (taskPopUpEditOpen) {
      taskToAdd.id = tasks.taskInEditMode._id;
      if (
        defineDispatcher(taskToAdd) !== defineDispatcher(tasks.taskInEditMode)
      ) {
        removeTask(tasks.taskInEditMode);
        updateTask(taskToAdd);
        // taskInEditMode - false
        // TaskPopUpEditOpen - false
      }
    } else {
      postTask(taskToAdd);
      // TaskPopUpCreateOpen - false
    }
    this.reset();
  };

  handleClose = () => {
    const { taskPopUpEditOpen } = this.props;
    if (taskPopUpEditOpen) {
      // taskInEditMode - false
      // TaskPopUpEditOpen - false
      // return
    }
    // TaskPopUpCreateOpen - false
  };

  reset = () =>
    this.setState({
      role: roles[4],
      date: new Date(),
      title: '',
      description: '',
      time: timeRanges[4],
      priority: 3,
    });

  render() {
    const windowWidth = document.documentElement.clientWidth;
    const { taskPopUpEditOpen } = this.props;
    const { role, date, title, description, time, priority } = this.state;
    return (
      <form className={styles.outer}>
        {!taskPopUpEditOpen ? (
          <h3 className={styles.createTaskTitle}>Create Task</h3>
        ) : windowWidth < 768 ? (
          <div className={styles.helperDiv}>
            <h3 className={styles.createTaskTitle}>Edit Task</h3>
            <button
              type="button"
              className={styles.svgBtn}
              onClick={this.modalDeleteTaskOpen}
            >
              <DeleteBtn className={styles.svg} />
            </button>
          </div>
        ) : (
          <h3 className={styles.createTaskTitle}>Edit Task</h3>
        )}
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
          <PrioritySelect
            priority={priority}
            onClick={this.handlePrioritySelect}
          />
        </div>
        {taskPopUpEditOpen && windowWidth > 767 && (
          <button
            type="button"
            className={styles.svgBtn}
            onClick={this.modalDeleteTaskOpen}
          >
            <DeleteBtn className={styles.svg} />
          </button>
        )}
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
