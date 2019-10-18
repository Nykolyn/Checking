import React, { Component } from 'react';
import styles from './NexWeekTab.module.css';

class NexWeekTab extends Component {
  state = {
    isOpenNext: true,
    isOpenAfter: true,
  };

  handleToggleNext = () => {
    this.setState(state => ({
      isOpenNext: !state.isOpenNext,
    }));
  };

  handleToggleAfter = () => {
    this.setState(state => ({
      isOpenAfter: !state.isOpenAfter,
    }));
  };

  render() {
    const { isOpenNext, isOpenAfter } = this.state;
    return (
      <main className={styles.container}>
        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleNext}
            className={styles.titleButton}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className={
              isOpenNext
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
            }
          >
            Next 7 Days
          </button>
          {isOpenNext && (
            <ul className={styles.cardList}>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
            </ul>
          )}
        </section>

        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleAfter}
            className={
              isOpenAfter
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
            }
          >
            After 7 Days
          </button>
          {isOpenAfter && (
            <ul className={styles.cardList}>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
              <li className={styles.cardItem}> card</li>
            </ul>
          )}
        </section>
      </main>
    );
  }
}

export default NexWeekTab;
