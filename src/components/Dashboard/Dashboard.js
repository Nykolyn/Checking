import React, { Component } from 'react';
import Header from './Header/Header';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <Header />
        <h1>Dashboard page</h1>
      </main>
    );
  }
}

export default Dashboard;
