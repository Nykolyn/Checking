import React, { Component } from 'react';
import TabsList from './TabsList/TabsList';
import TaskPopUp from '../TaskPopUp/TaskPopUp';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
import BurgerMenu from './BurgerMenu/BurgerMenu';

class Dashboard extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <BurgerMenu />
        <TabsList />
        <TaskPopUp />
        <CreateTaskButton />
      </main>
    );
  }
}

export default Dashboard;
