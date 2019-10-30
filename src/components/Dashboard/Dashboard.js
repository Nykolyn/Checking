import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ModalLogout from './ModalLogout/ModalLogout';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';
import TabsList from './TabsList/TabsList';
import css from './Dashbard.module.css';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
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
          <ModalLogout />
          <div className={css.dashboard}>
            {/* <div className={css.tabsListWrapper}>
              <TabsList />
            </div> */}
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
