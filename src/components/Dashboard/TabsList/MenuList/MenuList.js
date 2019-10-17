import React from 'react';
import { NavLink } from 'react-router-dom';

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
    </div>
  );
};

export default MenuList;
