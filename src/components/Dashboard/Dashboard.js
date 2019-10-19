import React, { Component } from 'react';
import TaskPopUp from '../TaskPopUp/TaskPopUp';
import Card from './Card/Card';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1> Dashboard page </h1> <Card />
        <TaskPopUp />
      </main>
    );
  }
}

export default Dashboard;
