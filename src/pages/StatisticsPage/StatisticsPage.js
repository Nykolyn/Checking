import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Chart from '../../components/Statistics/Chart/Chart';
import Table from '../../components/Statistics/Table/Table';
import Header from '../../components/Header/Header';
import styles from '../../components/Statistics/Statistic.module.css';
import BackButton from '../../components/BackButton/BackButtonContainer';

const storage = JSON.parse(localStorage.getItem('persist:root'));

const config = {
  headers: {
    Authorization: storage ? storage.token.slice(1, -1) : '',
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
      <>
        <Header />
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
        <BackButton />;
      </>
    );
  }
}
const mapStateToProps = state => ({ tasks: state });

export default connect(
  mapStateToProps,
  null,
)(StatisticsPage);
