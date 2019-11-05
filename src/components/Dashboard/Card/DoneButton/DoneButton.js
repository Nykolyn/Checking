import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Throttle } from 'react-throttle';
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
    return this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  handleClick = task => {
    const changedTask = { ...task, isComplete: true, date: new Date() };
    const { removeTask, updateTask, refreshUserRequest } = this.props;
    //
    refreshUserRequest();
    setTimeout(() => {
      updateTask(changedTask);
    }, 500);
    setTimeout(() => {
      removeTask(task);
    }, 500);
  };

  render() {
    const { isLoading } = this.state;
    const { inDoneTab, inBurnedOutTab, task } = this.props;
    return (
      <>
        <Throttle time="1000" handler="onClick">
          <button
            disabled={inDoneTab}
            type="button"
            className={inBurnedOutTab ? style.DoneBtnBurn : style.DoneBtn}
            style={styleSelector(inDoneTab, inBurnedOutTab)}
            onClick={() => {
              this.handleLoader();
              this.handleClick(task);
            }}
          >
            <ThumbUp />
          </button>
        </Throttle>
        {isLoading && (
          <div className={style.loaderWrapper}>
            <Loaders />
          </div>
        )}
      </>
    );
  }
}
