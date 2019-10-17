import React, { Component } from 'react';
import TabsList from './TabsList/TabsList';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <TabsList />
      </main>
    );
  }
}

export default Dashboard;
