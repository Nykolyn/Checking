import React, { Component } from 'react';
import { Element } from 'react-scroll';
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
            <ul className={styles.cardList}>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
            </ul>
          </section>
        </Element>
      </main>
    );
  }
}

export default BurnedOutTab;
