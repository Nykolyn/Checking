import React, { Component } from 'react';
import Card from './Card/Card';

class CardList extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul>
          <Card />
        </ul>
      </div>
    );
  }
}

export default CardList;
