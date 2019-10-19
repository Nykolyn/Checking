import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.ccs';

export default class BurgerMenu extends Component {
  state = { isOpen: false };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {isOpen && (
          <div className={styles.container}>
            <nav className={styles.navigation}>
              <NavLink
                to="/dashboard/today"
                activeClassName={styles.selected}
                className={styles.link}
                exact
              >
                <p className={[styles.title, styles.today].join(' ')}>Today</p>
              </NavLink>
              <NavLink
                to="/dashboard/nextweek"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.today].join(' ')}>
                  Tomorrow
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/burnedout"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.next].join(' ')}>
                  Next 7 Days
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/burnedout"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.next].join(' ')}>
                  After 7 Days
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/done"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.burnedout].join(' ')}>
                  Burned out
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/done"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.done].join(' ')}>Done</p>
              </NavLink>
              <NavLink
                to="/dashboard/done"
                activeClassName={styles.selected}
                className={styles.link}
              >
                <p className={[styles.title, styles.statistics].join(' ')}>
                  Statistics
                </p>
              </NavLink>
            </nav>
            <button type="button" className={styles.logOut}>
              Log out
            </button>
          </div>
        )}
      </>
    );
  }
}
