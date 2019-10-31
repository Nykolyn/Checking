import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleSelector from '../../../../helpers/DoneBtnStyleSelectHelper';
import style from './DoneButton.module.css';
import Loaders from '../../TabsList/Loaders';
import { ReactComponent as ThumbUp } from '../../../../assets/icons/thumb_up-24px.svg';

export default class DoneButton extends Component {
  state = {
    isLoading: false,
  };

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

  handleLoader = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  handleClick = task => {
    const changedTask = { ...task, isComplete: true, date: new Date() };
    const { removeTask, updateTask } = this.props;
    // this.handleLoader();
    removeTask(task);
    updateTask(changedTask);
    // this.handleLoader();
  };

  render() {
    const { isLoading } = this.state;
    const { inDoneTab, inBurnedOutTab, task } = this.props;
    return (
      <>
        {isLoading && (
          <div className={style.loaderWrapper}>
            <Loaders />
          </div>
        )}
        <button
          disabled={inDoneTab}
          type="button"
          className={inBurnedOutTab ? style.DoneBtnBurn : style.DoneBtn}
          style={styleSelector(inDoneTab, inBurnedOutTab)}
          onClick={this.handleClick(task)}
        >
          <ThumbUp />
        </button>
      </>
    );
  }
}
