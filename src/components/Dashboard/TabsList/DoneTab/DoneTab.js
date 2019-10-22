import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styles from './DoneTab.module.css';
import CardList from '../../CardList/CardList';

class DoneTab extends Component {
  state = {};

  render() {
    return (
      <main className={styles.container}>
        <Element name="done">
          <section className={styles.section}>
            {/* <button type="button" className={styles.titleButton}>
            Done
          </button> */}
            <p className={styles.titleButton}>Done</p>
            <CardList />
          </section>
        </Element>
      </main>
    );
  }
}

export default DoneTab;
