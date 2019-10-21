import React, { Component } from 'react';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <TaskPopUp />
      </main>
    );
  }
}

export default Dashboard;
