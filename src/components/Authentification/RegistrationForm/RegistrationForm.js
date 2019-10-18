import React from 'react';
import css from './RegistrationForm.module.css';
import FormButton from '../FormButton';
// import PropTypes from 'prop-types';

const RegistrationForm = () => (
  <form method="GET" className={css.form}>
    <label htmlFor="1" className={css.label}>
      E-mail<span className={css.RequireField}>*</span>
      <input
        type="email"
        id="1"
        className={css.formInput}
        placeholder="your@email.com"
      />
    </label>
    <label htmlFor="2" className={css.label}>
      Password (6 + characters)<span className={css.RequireField}>*</span>
      <input
        type="password"
        id="2"
        className={css.formInput}
        placeholder="your password"
        autoComplete="false"
      />
    </label>
    <label htmlFor="3" className={css.label}>
      Password Confirmation<span className={css.RequireField}>*</span>
      <input
        type="password"
        id="3"
        className={css.formInput}
        placeholder="confirmation"
        autoComplete="false"
      />
    </label>
    <label htmlFor="4" className={css.label}>
      <input type="checkbox" id="4" />
      Agreed with Private Policy<span className={css.RequireField}>*</span>
    </label>
    <FormButton type="submit">Registration</FormButton>
  </form>
);

export default RegistrationForm;
