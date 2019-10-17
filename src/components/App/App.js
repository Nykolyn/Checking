import React, { Component } from 'react';
import TaskPopUp from '../TaskPopUp/TaskPopUp';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <p>Робит</p> */}
        <TaskPopUp />
      </div>
    );
  }
}

export default App;
