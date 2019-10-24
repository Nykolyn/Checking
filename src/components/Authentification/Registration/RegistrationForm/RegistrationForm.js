/* eslint-disable */
import React, { Component } from 'react';
import css from './RegistrationForm.module.css';
import FormButton from '../../FormButton';
import PropTypes from 'prop-types';

class RegistrationForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  handleInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleFormSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const newUser = {
      email,
      password,
    };

    this.props.signUp(newUser);
  };

  render() {
    const { email, password, passwordConfirm } = this.state;
    return (
      <form method="GET" className={css.form} onSubmit={this.handleFormSubmit}>
        <h2 className={css.subTitle}>Your Account</h2>
        <label htmlFor="1" className={css.label}>
          <p className={css.labelTitle}>
            E-mail <span className={css.RequireField}>*</span>
          </p>
          <input
            onChange={this.handleInputChange}
            value={email}
            name="email"
            type="email"
            id="1"
            className={css.formInput}
            placeholder="your@email.com"
          />
        </label>
        <label htmlFor="2" className={css.label}>
          <p className={css.labelTitle}>
            Password (6 + characters){' '}
            <span className={css.RequireField}>*</span>
          </p>
          <input
            onChange={this.handleInputChange}
            value={password}
            name="password"
            type="password"
            id="2"
            className={css.formInput}
            placeholder="your password"
            autoComplete="false"
          />
        </label>
        <label htmlFor="3" className={css.label}>
          <p className={css.labelTitle}>
            Password Confirmation <span className={css.RequireField}>*</span>
          </p>

          <input
            onChange={this.handleInputChange}
            value={passwordConfirm}
            name="passwordConfirm"
            type="password"
            id="3"
            className={css.formInput}
            placeholder="confirmation"
            autoComplete="false"
          />
        </label>
        <label htmlFor="4" className={`${css.label} ${css.checkBoxLabel}`}>
          <input type="checkbox" id="4" />
          <p className={css.labelTitle}>
            Agreed with Private Policy{' '}
            <span className={css.RequireField}>*</span>
          </p>
        </label>
        <FormButton type="submit">Registration</FormButton>
      </form>
    );
  }
}

export default RegistrationForm;
