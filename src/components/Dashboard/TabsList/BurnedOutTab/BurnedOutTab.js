import React, { Component } from 'react';
import { Element } from 'react-scroll';
import CardList from '../../CardList/CardList';
import styles from './BurnedOutTab.module.css';

class BurnedOutTab extends Component {
  state = {};

  render() {
    return (
      <main className={styles.container}>
        <Element name="burnedOut">
          <section className={styles.section}>
            {/* <button type="button" className={styles.titleButton}>
            Burned Out
          </button> */}
            <p className={styles.titleButton}>Burned Out</p>
            <CardList />
          </section>
        </Element>
      </main>
    );
  }
}

export default BurnedOutTab;
