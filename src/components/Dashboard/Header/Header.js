import React, { Component } from 'react';
import styles from './Header.module.css';
// import logo from '..//..//../assets/icons';

class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={styles.container__header}>
        <ul className={styles.header__logo}>
          <li className={styles.header__box}>logo</li>
          <svg className={styles.header__svg} />
        </ul>
      </div>
    );
  }
}

export default Header;
