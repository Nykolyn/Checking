import React from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import TodayTab from '../TodayTomorrowTab/TodayTomorrowTab';
import NextWeekTab from '../NexWeekTab/NexWeekTab';
import BurnedOutTab from '../BurnedOutTab/BurnedOutTab';
import DoneTab from '../DoneTab/DoneTab';

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
        <Route path="/dashboard/today" component={TodayTab} />
        <Route path="/dashboard/nextweek" component={NextWeekTab} />
        <Route path="/dashboard/burnedout" component={BurnedOutTab} />
        <Route path="/dashboard/done" component={DoneTab} />
        <Redirect to="/dashboard/today" />
      </Switch>
    </div>
  );
};

export default MenuList;
