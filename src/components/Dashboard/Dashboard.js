import React, { Component } from 'react';
import TabsList from './TabsList/TabsList';
import Header from './Header/Header';
import TaskPopUp from '../TaskPopUp/TaskPopUp';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <Header />
        <h1>Dashboard page</h1>
        <TabsList />
        <TaskPopUp />
      </main>
    );
  }
}

export default Dashboard;
