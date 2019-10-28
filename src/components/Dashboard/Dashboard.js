import React, { Component } from 'react';

import PropTypes from 'prop-types';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';
import TabsList from './TabsList/TabsList';
import css from './Dashbard.module.css';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Header from '../Header/Header';

class Dashboard extends Component {
  static propTypes = {
    taskCreateOpen: PropTypes.bool.isRequired,
  };

  state = {};

  componentDidMount() {}

  render() {
    const { taskCreateOpen } = this.props;
    return (
      <>
        <Header />
        <main>
          <BurgerMenu />
          <div className={css.dashboard}>
            <TabsList />
            {taskCreateOpen ? (
              <aside className={css.createTaskModalWrapper}>
                <TaskPopUp />
              </aside>
            ) : (
              <div className={css.CreateTaskButtonWrapper}>
                <CreateTaskButton />
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default Dashboard;
