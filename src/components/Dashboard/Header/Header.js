/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { burgerMenuOpen } from '../../../redux/componentController/componentActions';
import { burgerMenuIsOpen } from '../../../redux/componentController/controllerSelectrors';
// import logo from '..//..//../assets/icons';

class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { burgerMenuToogle, isOpen } = this.props;
    console.log(isOpen);
    return (
      <nav className={styles.container}>
        <ul className={styles.header__logo}>
          <li>
            <img className={styles.logo} />
          </li>
          <li>
            <button
              onClick={burgerMenuToogle}
              className={
                isOpen
                  ? [styles.button, styles.checked].join(' ')
                  : styles.button
              }
            />
          </li>
        </ul>
      </nav>
    );
  }
}

const mSTP = state => ({
  isOpen: burgerMenuIsOpen(state),
});
const mDTP = dispatch => ({
  burgerMenuToogle: () => dispatch(burgerMenuOpen()),
});

export default connect(
  mSTP,
  mDTP,
)(Header);
