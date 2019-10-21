/*eslint-disable*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Link, scroller } from 'react-scroll';
import styles from './BurgerMenu.module.css';

export default class BurgerMenu extends Component {
  state = {
    // isOpen: false
  };

  handleClick({ target }) {
    console.log(target.innerText);
    // console.log('scroll to today button');
    // scroller.scrollTo('today', {
    //   duration: 1500,
    //   delay: 100,
    //   smooth: true,
    // });
  }

  render() {
    // const { isOpen } = this.state;
    return (
      <section className={styles.burgerMenu}>
        <div className={styles.container} onClick={this.handleClick}>
          <NavLink to="/dashboard/today" className={styles.navLink} exact>
            <button type="button" onClick={this.handleClick}>
              Today
            </button>
          </NavLink>
          <NavLink to="/dashboard/today" className={styles.navLink} exact>
            <button type="button" onClick={this.handleClick}>
              Tomorrow
            </button>
          </NavLink>
          <NavLink to="/dashboard/nextweek" className={styles.navLink} exact>
            <button type="button" onClick={this.handleClick}>
              Next 7 Days
            </button>
          </NavLink>
          <NavLink to="/dashboard/nextweek" className={styles.navLink} exact>
            <button type="button" onClick={this.handleClick}>
              After 7 Days
            </button>
          </NavLink>
          <NavLink to="/dashboard/burnedout" className={styles.navLink} exact>
            <button type="button">Burned Out</button>
          </NavLink>
          <NavLink to="/dashboard/done" className={styles.navLink} exact>
            <button type="button">Done</button>
          </NavLink>
        </div>
      </section>
    );
  }
}
