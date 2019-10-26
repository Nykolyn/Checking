import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import {
  modalLogoutOpen,
  burgerMenuOpen,
  handleOpenDashboard,
  handleOpenStatistics,
} from '../../redux/componentController/componentActions';
import {
  burgerMenuIsOpen,
  statisticsIsOpen,
} from '../../redux/componentController/controllerSelectrors';
import { getToken } from '../../redux/session/sessionSelectors';
import { ReactComponent as Logo } from '../../assets/icons/logo-darkblue.svg';

const Header = ({
  token,
  isOpen,
  openModalLogout,
  burgerMenuToogle,
  openDashboard,
  openStatistics,
  isStatisticsOpen,
}) => {
  const screenWidth = document.documentElement.clientWidth;
  return (
    <header>
      <nav>
        <ul className={styles.container}>
          {screenWidth > 767 && (
            <li className={styles.li}>
              <Link to={isStatisticsOpen ? '/dashboard' : '/statistics'}>
                <button
                  type="button"
                  className={
                    isStatisticsOpen
                      ? styles.donutStatistics
                      : styles.donutDashboard
                  }
                  onClick={isStatisticsOpen ? openDashboard : openStatistics}
                />
              </Link>
            </li>
          )}
          <li className={styles.li}>
            <Link to="/dashboard">
              <Logo className={styles.logo} />
            </Link>
          </li>
          {screenWidth > 767 && (
            <li className={styles.li}>
              <button
                type="button"
                onClick={openModalLogout}
                className={styles.logOut}
              >
                Log out
              </button>
            </li>
          )}
          {screenWidth < 768 && token && (
            <li className={styles.burgerLi}>
              <button
                type="button"
                onClick={burgerMenuToogle}
                className={isOpen ? styles.checked : styles.button}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  token: '',
};

Header.propTypes = {
  token: PropTypes.string,
  openModalLogout: PropTypes.func.isRequired,
  burgerMenuToogle: PropTypes.func.isRequired,
  openDashboard: PropTypes.func.isRequired,
  openStatistics: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isStatisticsOpen: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  isOpen: burgerMenuIsOpen(state),
  isStatisticsOpen: statisticsIsOpen(state),
  token: getToken(state),
});
const mDTP = dispatch => ({
  burgerMenuToogle: () => dispatch(burgerMenuOpen()),
  openModalLogout: () => dispatch(modalLogoutOpen()),
  openDashboard: () => dispatch(handleOpenDashboard()),
  openStatistics: () => dispatch(handleOpenStatistics()),
});

export default connect(
  mSTP,
  mDTP,
)(Header);
