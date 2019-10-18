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
            className={styles.title}
          >
            Today
          </button>
          {isOpenToday && (
            <div>
              <div className={styles.card}> card</div>
              <div className={styles.card}> card</div>
              <div className={styles.card}> card</div>
            </div>
          )}
        </section>

        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleTomorrow}
            className={styles.title}
          >
            Tomoroow
          </button>
          {isOpenTomorrow && (
            <div>
              <div className={styles.card}> card</div>
              <div className={styles.card}> card</div>
              <div className={styles.card}> card</div>
            </div>
          )}
        </section>
      </main>
    );
  }
}

export default TodayTomorrowTab;
