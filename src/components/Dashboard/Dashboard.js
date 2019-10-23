import React, { Component } from 'react';
import TabsList from './TabsList/TabsList';
import Header from './Header/Header';
import TaskPopUp from '../TaskPopUp/TaskPopUp';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

class Dashboard extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <main>
        <Header />
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
