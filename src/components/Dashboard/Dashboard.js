import React, { Component } from 'react';

import PropTypes from 'prop-types';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';
import TabsList from './TabsList/TabsList';
import Card from './Card/Card';
import css from './Dashbard.module.css';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
import BurgerMenu from './BurgerMenu/BurgerMenu';

// const task = {
//   role: 'None',
//   priority: 1,
//   title: 'Title with many - many symbols, many - many realy',
//   text:
//     'Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb) Body text(60 symb)',
// };
class Dashboard extends Component {
  static propTypes = {
    taskCreateOpen: PropTypes.bool.isRequired,
  };

  state = {};

  componentDidMount() {}

  render() {
    const { taskCreateOpen } = this.props;
    return (
      <main>
        <h1>Dashboard page</h1>
        <Card />
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
    );
  }
}

export default Dashboard;
