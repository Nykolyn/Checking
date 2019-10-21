import React, { Component } from 'react';
import Header from './Header/Header';
import TaskPopUp from '../TaskPopUp/TaskPopUp';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <Header />
        <h1>Dashboard page</h1>
        <TaskPopUp />
      </main>
    );
  }
}

export default Dashboard;
