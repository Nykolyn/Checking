import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuList.module.css';

const MenuList = () => {
  return (
    <div className={styles.block}>
      <NavLink to="/dashboard/today" exact>
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
