import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm/RegistrationFormContainer';
import css from './Registration.module.css';
// import PropTypes from 'prop-types';
import Header from '../../Header/Header';

class Registration extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <div className={css.registrationWrapper}>
          <section className={css.registrationSection}>
            <div className={css.formWrapper}>
              <div className={css.formInner}>
                <div>HEADER</div>
                <div className={css.headerWrapper}>
                  <h1 className={css.title}>Create Account</h1>
                  <Link to="/login" className={css.link}>
                    Login
                  </Link>
                </div>

                <RegistrationForm {...this.props} />
              </div>
            </div>
            <div className={css.imgWrapper} />
          </section>
        </div>
      </>
    );
  }
}

export default Registration;
