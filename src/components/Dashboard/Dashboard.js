import React, { Component } from 'react';

import Card from './Card/Card';
import TabsList from './TabsList/TabsList';
import TaskPopUp from '../TaskPopUp/TaskPopUp';
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
  state = {};

  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <Card />
        <BurgerMenu />
        <TabsList />
        <TaskPopUp />
        <CreateTaskButton />
      </main>
    );
  }
}

export default Dashboard;
