import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import LogIn from '../../components/Authentification/LogInForm/LogIn';
// import { isAuthentificated } from '../../redux/session/sessionSelectors';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { signIn } from '../../redux/session/sessionOperations';

const LoginPage = ({ history, onSignIn }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { email, password } = values;
          onSignIn({ email, password });
          setSubmitting(false);
        }, 100);
      }}
    >
      {props => <LogIn {...props} history={history} />}
    </Formik>
  </div>
);

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  // authentificated: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   authentificated: isAuthentificated(state),
// });

const mapDispatchToProps = {
  onSignIn: signIn,
};

export default connect(
  // mapStateToProps,
  mapDispatchToProps,
)(authRedirect(LoginPage));
