import React, { Component } from 'react';
import TaskPopUp from '../TaskPopUp/TaskPopUp';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <TaskPopUp />
        <CreateTaskButton />
      </main>
    );
  }
}

export default Dashboard;
