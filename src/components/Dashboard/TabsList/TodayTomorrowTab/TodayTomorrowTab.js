import React, { Component } from 'react';
import styles from './TodayTomorowTab.module.css';

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
          >
            Today
          </button>
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
            className={styles.titleButton}
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
