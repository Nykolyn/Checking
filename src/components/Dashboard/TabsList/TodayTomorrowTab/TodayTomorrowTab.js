import React, { Component } from 'react';
import styles from './TodayTomorowTab.module.css';

// const dropDoun = {
//   transformOrigin: 'center center',
//   tranform: 'rotate(180deg)',
// };

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
  };

  handleToggleToday = () => {
    this.setState(state => ({
      isOpenToday: !state.isOpenToday,
    }));
  };

  handleToggleTomorrow = () => {
    this.setState(state => ({
      isOpenTomorrow: !state.isOpenTomorrow,
    }));
  };

  render() {
    const { isOpenToday, isOpenTomorrow } = this.state;
    return (
      <main className={styles.container}>
        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleToday}
            className={styles.titleButton}
            className={
              isOpenToday
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
            }
          >
            Today
          </button>
          <span />
          {isOpenToday && (
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
            onClick={this.handleToggleTomorrow}
            className={
              isOpenTomorrow
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
            }
          >
            Tomoroow
          </button>
          {isOpenTomorrow && (
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

export default TodayTomorrowTab;
