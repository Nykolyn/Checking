/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { burgerMenuOpen } from '../../../redux/componentController/componentActions';
import { burgerMenuIsOpen } from '../../../redux/componentController/controllerSelectrors';
// import { ReactComponent as Logo } from '../../../assets/icons/logo-darkblue.svg';

class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { burgerMenuToogle, isOpen } = this.props;
    return (
      <nav className={styles.container}>
        <li className={styles.header__logo}>
          <li className={styles.button__stats}>
            <button click="onClick" />
          </li>
          <li>
            <logo />
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
        </li>
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
