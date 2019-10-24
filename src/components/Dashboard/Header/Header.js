import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import { burgerMenuToggle } from '../../../redux/componentController/componentActions';
// import logo from '..//..//../assets/icons';

class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { burgerMenuToggle } = this.props;
    return (
      <div className={styles.container__header}>
        <ul className={styles.header__logo}>
          <img className={styles.logo}></img>
          <button onClick={burgerMenuToggle} className={styles.button}></button>
          {/* <svg className={styles.header__svg} /> */}
        </ul>
      </div>
    );
  }
}

const mSTP = state => ({});
const mDTP = dispatch => ({
  burgerMenuToggle: () => dispatch(burgerMenuToggle()),
});

export default connect(
  mSTP,
  mDTP,
)(Header);
