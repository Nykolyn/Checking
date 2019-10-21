import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styles from './DoneTab.module.css';

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

export default DoneTab;
