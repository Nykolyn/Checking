import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loader from './Loader';
import MenuList from './MenuList/MenuList';
import styles from './TabsList.module.css';

const AsyncTodayTab = Loadable({
  loader: () =>
    import(
      './TodayTomorrowTab/TodayTomorrowTab' /* webpackChunkName: "TodayTomorrow-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncNextWeekTab = Loadable({
  loader: () =>
    import('./NexWeekTab/NexWeekTab' /* webpackChunkName: "NexWeek-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncBurnedOutTab = Loadable({
  loader: () =>
    import(
      './BurnedOutTab/BurnedOutTab' /* webpackChunkName: "BurnedOutTab-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncDoneTab = Loadable({
  loader: () =>
    import('./DoneTab/DoneTab' /* webpackChunkName: "DoneTab-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class TabsList extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <MenuList />
        <div className={styles.content}>
          <Switch>
            <Route path="/dashboard/today" component={AsyncTodayTab} />
            <Route path="/dashboard/nextweek" component={AsyncNextWeekTab} />
            <Route path="/dashboard/burnedout" component={AsyncBurnedOutTab} />
            <Route path="/dashboard/done" component={AsyncDoneTab} />
            <Redirect to="/dashboard/today" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TabsList;
