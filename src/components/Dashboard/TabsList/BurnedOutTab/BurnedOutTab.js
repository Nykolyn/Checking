import React, { Component } from 'react';
import styles from './BurnedOutTab.module.css';

class BurnedOutTab extends Component {
  state = {};

  render() {
    return (
      <main className={styles.container}>
        <section className={styles.section}>
          <button type="button" className={styles.titleButton}>
            Burned Out
          </button>
          <ul className={styles.cardList}>
            <li className={styles.cardItem}> card</li>
            <li className={styles.cardItem}> card</li>
            <li className={styles.cardItem}> card</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default BurnedOutTab;
