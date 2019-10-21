import React from 'react';
import css from './RegistrationForm.module.css';
import FormButton from '../FormButton';
// import PropTypes from 'prop-types';

const RegistrationForm = () => (
  <form method="GET" className={css.form}>
    <h2 className={css.subTitle}>Your Account</h2>
    <label htmlFor="1" className={css.label}>
      <p className={css.labelTitle}>
        E-mail <span className={css.RequireField}>*</span>
      </p>
      <input
        type="email"
        id="1"
        className={css.formInput}
        placeholder="your@email.com"
      />
    </label>
    <label htmlFor="2" className={css.label}>
      <p className={css.labelTitle}>
        Password (6 + characters) <span className={css.RequireField}>*</span>
      </p>
      <input
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
        Agreed with Private Policy <span className={css.RequireField}>*</span>
      </p>
    </label>
    <FormButton type="submit">Registration</FormButton>
  </form>
);

export default RegistrationForm;
