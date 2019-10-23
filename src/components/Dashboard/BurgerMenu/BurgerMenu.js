/*eslint-disable*/
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import styles from './BurgerMenu.module.css';
import { connect } from 'react-redux';
import { burgerMenuIsOpen } from '../../../redux/componentController/controllerSelectrors';
import { burgerEvent } from '../../../redux/componentController/componentActions';

class BurgerMenu extends Component {
  state = { event: null };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    this.getBurgerEvent;
  }

  handleClick = ({ target }) => {
    this.setState(state => ({
      event: target.title,
    }));
  };

  render() {
    const { isOpen, getBurgerEvent, burgerMenuIsOpen } = this.props;
    return (
      <>
        {isOpen && (
          <nav className={styles.burgerMenu}>
            <ul className={styles.burgerList}>
              <li className={styles.burgerItems}>
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
                    onClick={getBurgerEvent}
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.today].join(' ')}
                  >
                    Today
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
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
                    onClick={getBurgerEvent}
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.today].join(' ')}
                  >
                    Tomorrow
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/nextweek"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    title="next"
                    type="button"
                    onClick={this.handleClick}
                    onClick={getBurgerEvent}
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.next].join(' ')}
                  >
                    Next 7 Days
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/nextweek"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    title="after"
                    type="button"
                    onClick={this.handleClick}
                    onClick={getBurgerEvent}
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.next].join(' ')}
                  >
                    After 7 Days
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/burnedout"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.burned].join(' ')}
                  >
                    Burned Out
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/dashboard/done"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.done].join(' ')}
                  >
                    Done
                  </button>
                </NavLink>
              </li>
              <li className={styles.burgerItems}>
                <NavLink
                  to="/statistics"
                  className={styles.navLink}
                  activeClassName={styles.selected}
                >
                  <button
                    type="button"
                    onClick={burgerMenuIsOpen}
                    className={[styles.burgerButton, styles.statistics].join(
                      ' ',
                    )}
                  >
                    Statistics
                  </button>
                </NavLink>
              </li>
            </ul>
            <div className={styles.wrapper}>
              <button
                type="button"
                onClick={burgerMenuIsOpen}
                className={styles.logButton}
              >
                Log Out
              </button>
            </div>
          </nav>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: burgerMenuIsOpen(state),
});
const mapDispatchToProps = dispatch => ({
  getBurgerEvent: event => dispatch(burgerEvent(event.target.title)),
  burgerMenuIsOpen: () => dispatch(burgerMenuIsOpen(falls)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerMenu);
