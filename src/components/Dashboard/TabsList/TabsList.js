import React, { Component } from 'react';
// import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from 'react-router-dom';
// import Loader from './Loader';
import MenuList from './MenuList/MenuList';
import styles from './TabsList.module.css';
import TodayTab from './TodayTomorrowTab/TodayTomorrowTab';
import NextWeekTab from './NexWeekTab/NexWeekTab';
import BurnedOutTab from './BurnedOutTab/BurnedOutTab';
import DoneTab from './DoneTab/DoneTab';

// const AsyncTodayTab = Loadable({
//   loader: () =>
//     import(
//       './TodayTomorrowTab/TodayTomorrowTab' /* webpackChunkName: "TodayTomorrow-page" */
//     ),
//   loading: Loader,
//   timeout: 10000,
//   delay: 200,
// });

// const AsyncNextWeekTab = Loadable({
//   loader: () =>
//     import('./NexWeekTab/NexWeekTab' /* webpackChunkName: "NexWeek-page" */),
//   loading: Loader,
//   timeout: 10000,
//   delay: 200,
// });

// const AsyncBurnedOutTab = Loadable({
//   loader: () =>
//     import(
//       './BurnedOutTab/BurnedOutTab' /* webpackChunkName: "BurnedOutTab-page" */
//     ),
//   loading: Loader,
//   timeout: 10000,
//   delay: 200,
// });

// const AsyncDoneTab = Loadable({
//   loader: () =>
//     import('./DoneTab/DoneTab' /* webpackChunkName: "DoneTab-page" */),
//   loading: Loader,
//   timeout: 10000,
//   delay: 200,
// });

class TabsList extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <MenuList />
        <div className={styles.content}>
          <Switch>
            <Route path="/dashboard/today" component={TodayTab} />
            <Route path="/dashboard/nextweek" component={NextWeekTab} />
            <Route path="/dashboard/burnedout" component={BurnedOutTab} />
            <Route path="/dashboard/done" component={DoneTab} />
            <Redirect to="/dashboard/today" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default TabsList;
