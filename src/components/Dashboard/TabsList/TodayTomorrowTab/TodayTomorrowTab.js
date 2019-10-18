import React from 'react';
import styles from './TodayTomorowTab.module.css';

const TodayTomorrowTab = ({ today, tomorrow }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <p className={styles.title}>Today</p>
        <div className={styles.card}> card</div>
        <div className={styles.card}> card</div>
        <div className={styles.card}> card</div>
      </section>

      <section className={styles.section}>
        <p className={styles.title}>Tomoroow</p>
        <div className={styles.card}> card</div>
        <div className={styles.card}> card</div>
        <div className={styles.card}> card</div>
      </section>
    </div>
  );
};

export default TodayTomorrowTab;
