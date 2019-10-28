import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Chart from '../../components/Statistics/Chart/Chart';
import Table from '../../components/Statistics/Table/Table';
import styles from '../../components/Statistics/Statistic.module.css';

const storage = localStorage.getItem('persist:root');
// const { token } = JSON.parse(storage);
// console.log(token);

const config = {
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjVlZDRlN2YyMjFhMDQ3YjgyZjE2ZiIsImlhdCI6MTU3MjIwMzg1NX0.tnZ449vUilpmn5TXRDZh-2MZJA1QrWjgFAzwSoVC4Q0',
  },
};

class StatisticsPage extends Component {
  state = {};

  componentDidMount() {
    axios
      .get('https://cheking.goit.co.ua/api/v1/tasks', config)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const { tasks } = this.state;
    // console.log(this.state);

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
const mapStateToProps = state => ({ tasks: state });

export default connect(
  mapStateToProps,
  null,
)(StatisticsPage);
