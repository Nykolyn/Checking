import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import styleSelector from '../../../../helpers/DoneBtnStyleSelectHelper';
import style from './DoneButton.module.css';
import { ReactComponent as ThumbUp } from '../../../../assets/icons/thumb_up-24px.svg';

export default class DoneButton extends Component {
  state = {};

  static propTypes = {
    removeTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    inBurnedOutTab: PropTypes.bool.isRequired,
    inDoneTab: PropTypes.bool.isRequired,
    task: PropTypes.shape({
      role: PropTypes.string,
      time: PropTypes.string,
      priority: PropTypes.number,
      isComplete: PropTypes.bool,
      _id: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      userId: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      __v: PropTypes.number,
    }).isRequired,
  };

  throttleClick = throttle(() => {
    this.handleClick();
  }, 1000);

  handleClick = task => {
    // const { task } = this.props;
    const changedTask = { ...task, isComplete: true };
    const { removeTask, updateTask } = this.props;
    removeTask(task);
    updateTask(changedTask);
  };

  render() {
    const { inDoneTab, inBurnedOutTab } = this.props;
    return (
      <>
        <button
          disabled={inDoneTab}
          type="button"
          className={inBurnedOutTab ? style.DoneBtnBurn : style.DoneBtn}
          style={styleSelector(inDoneTab, inBurnedOutTab)}
          onClick={this.throttleClick}
        >
          <ThumbUp />
        </button>
      </>
    );
  }
}
