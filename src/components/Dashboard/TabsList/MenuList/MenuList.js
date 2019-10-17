import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../Loader';

const AsyncTodayTab = Loadable({
  loader: () =>
    import(
      '../TodayTomorrowTab/TodayTomorrowTab' /* webpackChunkName: "TodayTomorrow-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncNextWeekTab = Loadable({
  loader: () =>
    import('../NexWeekTab/NexWeekTab' /* webpackChunkName: "NexWeek-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncBurnedOutTab = Loadable({
  loader: () =>
    import(
      '../BurnedOutTab/BurnedOutTab' /* webpackChunkName: "BurnedOutTab-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncDoneTab = Loadable({
  loader: () =>
    import('../DoneTab/DoneTab' /* webpackChunkName: "DoneTab-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const MenuList = () => {
  return (
    <div>
      <NavLink to="/dashboard/today" exact>
        {/* <button type="button" /> */}
        <p>TodayTomorrw Tab</p>
      </NavLink>
      <NavLink to="/dashboard/nextweek">
        <p>NextWeek Tab</p>
      </NavLink>
      <NavLink to="/dashboard/burnedout">
        <p>BurnedOut Tab</p>
      </NavLink>
      <NavLink to="/dashboard/done">
        <p>Done Tab</p>
      </NavLink>

      <Switch>
        <Route path="/dashboard/today" component={AsyncTodayTab} />
        <Route path="/dashboard/nextweek" component={AsyncNextWeekTab} />
        <Route path="/dashboard/burnedout" component={AsyncBurnedOutTab} />
        <Route path="/dashboard/done" component={AsyncDoneTab} />
        <Redirect to="/dashboard/today" />
      </Switch>
    </div>
  );
};

export default MenuList;
