import React from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Registration from '../../components/Authentification/Registration/Registration';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { signUp } from '../../redux/session/sessionOperations';

const SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short password!')
    .max(16, 'Too long password!')
    .required('Required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const RegistrationPage = ({ onSignUp, history }) => (
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
    {props => <Registration {...props} history={history} />}
  </Formik>
);

RegistrationPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

const mapDispatchToProps = {
  onSignUp: signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(authRedirect(RegistrationPage));
