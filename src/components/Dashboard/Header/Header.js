/*eslint-disable*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { burgerMenuOpen } from '../../../redux/componentController/componentActions';
// import logo from '..//..//../assets/icons';
class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { burgerMenuToogle } = this.props;
    return (
      <div className={styles.container__header}>
        <ul className={styles.header__logo}>
          <img className={styles.logo} />
          <button onClick={burgerMenuToogle} className={styles.button} />
          {/* <svg className={styles.header__svg} /> */}
        </ul>
      </div>
    );
  }
}

const mSTP = state => ({});
const mDTP = dispatch => ({
  burgerMenuToogle: () => dispatch(burgerMenuOpen()),
});

export default connect(
  mSTP,
  mDTP,
)(Header);
