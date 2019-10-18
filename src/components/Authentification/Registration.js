import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import css from './Registration.module.css';
// import PropTypes from 'prop-types';

class Registration extends Component {
  state = {};

  render() {
    return (
      <section className={css.registrationSection}>
        <div>HEADER</div>
        <div className="">
          <h1 className="title">asdas</h1>
          <p>
            <a href="google.com">Login</a>
          </p>
        </div>
        <p>Your account</p>
        <RegistrationForm />
      </section>
    );
  }
}

export default Registration;
