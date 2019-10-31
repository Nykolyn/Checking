import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Chart from '../../components/Statistics/Chart/Chart';
import Table from '../../components/Statistics/Table/Table';
import Header from '../../components/Header/Header';
import styles from '../../components/Statistics/Statistic.module.css';
import BackButton from '../../components/BackButton/BackButtonContainer';
// import { array } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/prop-types';
import roleFilter from '../../helpers/roleFilter';

const storage = JSON.parse(localStorage.getItem('persist:root'));

const config = {
  headers: {
    Authorization: storage ? storage.token.slice(1, -1) : '',
  },
};

class StatisticsPage extends Component {
  state = {
    done: [],
  };

  componentDidMount() {
    axios
      .get('https://cheking.goit.co.ua/api/v1/tasks', config)
      .then(response => {
        const { data } = response;

        this.setState({ done: [...data.tasks.done] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  total = (todayTomorrow, nextAfter, burnedOut, done) => {
    const { today, tomorrow } = todayTomorrow;
    const { next, after } = nextAfter;

    const todayFiltered = roleFilter(today);
    const tomorrowFiltered = roleFilter(tomorrow);
    const nextFiltered = roleFilter(next);
    const afterFiltered = roleFilter(after);
    const burnedOutFiltered = roleFilter(burnedOut);
    const doneFiltered = roleFilter(done);

    const partnerSum =
      todayFiltered.partner +
      tomorrowFiltered.partner +
      nextFiltered.partner +
      afterFiltered.partner +
      burnedOutFiltered.partner +
      doneFiltered.partner;

    const learnerSum =
      todayFiltered.learner +
      tomorrowFiltered.learner +
      nextFiltered.learner +
      afterFiltered.learner +
      burnedOutFiltered.learner +
      doneFiltered.learner;

    const dotherSonSum =
      todayFiltered.dotherSon +
      tomorrowFiltered.dotherSon +
      nextFiltered.dotherSon +
      afterFiltered.dotherSon +
      burnedOutFiltered.dotherSon +
      doneFiltered.dotherSon;

    const coWorkerSum =
      todayFiltered.coWorker +
      tomorrowFiltered.coWorker +
      nextFiltered.coWorker +
      afterFiltered.coWorker +
      burnedOutFiltered.coWorker +
      doneFiltered.coWorker;

    const noneSum =
      todayFiltered.none +
      tomorrowFiltered.none +
      nextFiltered.none +
      afterFiltered.none +
      burnedOutFiltered.none +
      doneFiltered.none;

    return (
      [partnerSum, learnerSum, dotherSonSum, coWorkerSum, noneSum] || [
        0,
        0,
        0,
        0,
        0,
      ]
    );
  };

  render() {
    // const { done } = this.state;
    const { tasks } = this.props;
    const { burnedOut, nextAfter, todayTomorrow, done } = tasks.tasks;

    console.log(this.total(todayTomorrow, nextAfter, burnedOut, done));

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
                <Table
                  data={done}
                  dataTotal={this.total(
                    todayTomorrow,
                    nextAfter,
                    burnedOut,
                    done,
                  )}
                />
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
