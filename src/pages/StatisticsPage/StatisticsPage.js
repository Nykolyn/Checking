import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Chart from '../../components/Statistics/Chart/Chart';
import Table from '../../components/Statistics/Table/Table';
import styles from '../../components/Statistics/Statistic.module.css';

const storage = localStorage.getItem('persist:root');
const { token } = JSON.parse(storage);

const config = {
  headers: {
    Authorization: token.slice(1, -1),
  },
};

class StatisticsPage extends Component {
  state = { done: [] };

  componentDidMount() {
    axios
      .get('https://cheking.goit.co.ua/api/v1/tasks', config)
      .then(response => {
        const { data } = response;
        console.log(data);

        this.setState({ done: [...data.tasks.done], test: [data.tasks] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  total = () => {
    const { burnedOut } = this.state.test;
    console.log(burnedOut);
  };

  render() {
    const { done, test } = this.state;
    console.log(test);

    return (
      <div className={styles.outer}>
        <div className={styles.inner}>
          <h2 className={styles.pageName}>Statistics</h2>
          <div className={styles.componentsWraper}>
            <div className={styles.chartWraper}>
              <Chart data={done} />
            </div>
            <div className={styles.tableWraper}>
              <Table data={done} />
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
