import React, { Component } from 'react';
import Chart from '../../components/Statistic/Chart/Chart';
import Table from '../../components/Statistic/Table/Table';
import styles from '../../components/Statistic/Statistic.module.css';

class StatisticsPage extends Component {
  state = {};

  render() {
    return (
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h2 className={styles.pageName}>Statistics</h2>
          <div className={styles.componentsWraper}>
            <div className={styles.chartWraper}>
              <Chart />
            </div>
            <div className={styles.tableWraper}>
              <Table />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticsPage;
