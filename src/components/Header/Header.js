import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { burgerMenuOpen } from '../../redux/componentController/componentActions';
import { burgerMenuIsOpen } from '../../redux/componentController/controllerSelectrors';
import { ReactComponent as Logo } from '../../assets/icons/logo-darkblue.svg';

const Header = ({ isOpen, burgerMenuToogle }) => (
  <header>
    <nav>
      <ul className={styles.container}>
        <li className={styles.li}>
          <button click="onClick" className={styles.donutBtn} />
        </li>
        <li className={styles.li}>
          <Logo className={styles.logo} />
        </li>
        <li className={styles.li}>
          <button
            onClick={burgerMenuToogle}
            className={styles.logOut}
            // className={
            //     isOpen
            //         ? [styles.button, styles.checked].join(' ')
            //         : styles.button
            // }
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

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
