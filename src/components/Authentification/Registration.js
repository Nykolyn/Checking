import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import css from './Registration.module.css';
// import PropTypes from 'prop-types';

class Registration extends Component {
  state = {};

  render() {
    return (
      <section className={css.registrationSection}>
        <div>HEADER</div>
        <div className={css.headerWrapper}>
          <h1 className={css.title}>Create Account</h1>
          <Link to="/login" className={css.link}>
            Login
          </Link>
        </div>
        <h2 className={css.subTitle}>Your Account</h2>
        <RegistrationForm />
      </section>
    );
  }
}

export default Registration;
