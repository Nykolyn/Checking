/*eslint-disable*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import styles from './BurgerMenu.module.css';

// import { connect } from 'react-redux';
// import { isOpenModal } from '../../../redux/componentController/controllerSelectrors';

class BurgerMenu extends Component {
  state = {
    isOpen: true,
  };

  // componentDidMount() {
  //   const { burgerMenuIsOpen } = this.props;
  //   this.setState({
  //     isOpen: burgerMenuIsOpen,
  //   });
  // }

  handleClick({ target }) {
    console.log('target innerText - ', target.innerText);
    console.log('target title - ', target.title);
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
      <nav className={styles.burgerMenu}>
        <ul className={styles.burgerList}>
          <NavLink
            to="/dashboard/today"
            className={styles.navLink}
            activeClassName={styles.selected}
            activeClassName={styles.selected}
            exact
          >
            <button
              title="today"
              type="button"
              onClick={this.handleClick}
              className={[styles.burgerButton, styles.today].join(' ')}
            >
              Today
            </button>
          </NavLink>
          <NavLink
            to="/dashboard/today"
            className={styles.navLink}
            activeClassName={styles.selected}
            exact
          >
            <button
              title="tomorrow"
              type="button"
              onClick={this.handleClick}
              className={[styles.burgerButton, styles.today].join(' ')}
            >
              Tomorrow
            </button>
          </NavLink>
          <NavLink
            to="/dashboard/nextweek"
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            <button
              title="next"
              type="button"
              onClick={this.handleClick}
              className={[styles.burgerButton, styles.next].join(' ')}
            >
              Next 7 Days
            </button>
          </NavLink>
          <NavLink
            to="/dashboard/nextweek"
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            <button
              title="after"
              type="button"
              onClick={this.handleClick}
              className={[styles.burgerButton, styles.next].join(' ')}
            >
              After 7 Days
            </button>
          </NavLink>
          <NavLink
            to="/dashboard/burnedout"
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            <button
              type="button"
              className={[styles.burgerButton, styles.burned].join(' ')}
            >
              Burned Out
            </button>
          </NavLink>
          <NavLink
            to="/dashboard/done"
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            <button
              type="button"
              className={[styles.burgerButton, styles.done].join(' ')}
            >
              Done
            </button>
          </NavLink>
          <NavLink
            to="/statistics"
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            <button
              type="button"
              className={[styles.burgerButton, styles.statistics].join(' ')}
            >
              Statistics
            </button>
          </NavLink>
          <button type="button" className={styles.logButton}>
            log out
          </button>
        </ul>
      </nav>
    );
  }
}

export default BurgerMenu;

// const mapStateToProps = state => ({
//   burgerMenuIsOpen:  burgerMenuIsOpen(state),
// });

// export default connect(
//   mapStateToProps,
//   null,
// )(TodayTomorrowTab);
