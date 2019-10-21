import React, { Component } from 'react';
import TabsList from './TabsList/TabsList';
// import TaskPopUp from '../TaskPopUp/TaskPopUp';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <TabsList />
        {/* <TaskPopUp /> */}
      </main>
    );
  }
}

export default Dashboard;
