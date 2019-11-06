import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Registration from '../../components/Authentification/Registration/Registration';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { signUp } from '../../redux/session/sessionOperations';

const SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .max(16)
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const RegistrationPage = ({ onSignUp }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordConfirm: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        const { email, password, passwordConfirm } = values;
        onSignUp({ email, password, passwordConfirm });
        setSubmitting(false);
      }, 100);
    }}
    validationSchema={SIGNUP_SCHEMA}
  >
    {props => <Registration {...props} />}
  </Formik>
);

RegistrationPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSignUp: signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(authRedirect(RegistrationPage));
