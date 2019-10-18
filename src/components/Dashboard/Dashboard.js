import React, { Component } from 'react';
import ModalLogout from './ModalLogout/ModalLogout';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <main>
        <h1>Dashboard page</h1>
        <ModalLogout />
      </main>
    );
  }
}

export default Dashboard;
