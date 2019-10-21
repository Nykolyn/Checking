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
          {/* <svg class="inline-svg" "http://www.w3.org/2000/svg"/> */}
          {/* <g class="svg-menu-toggle"></g> */}
        </ul>
      </div>
    );
  }
}

export default Header;
