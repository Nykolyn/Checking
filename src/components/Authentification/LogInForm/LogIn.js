import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import style from './LogInForm.module.css';
import FormButton from '../FormButton';
import Header from '../../Header/Header';
import { signIn } from '../../../redux/session/sessionOperations';
import { isAuthentificated } from '../../../redux/session/sessionSelectors';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const screenWidth = document.documentElement.clientWidth;
    const { email, password } = this.state;
    return (
      <div className={style.wrapLogin}>
        {screenWidth < 768 && <Header />}
        <div className={style.loginContainer}>
          <div className={style.imgContainer} />

          <div className={style.textWrap}>
            <div className={style.loginTextWrap}>
              <h2 className={style.textLogin}>Log In</h2>
              <Link to="/registration" className={style.linkCreate}>
                <p className={style.textCreate}>Create an account</p>
              </Link>
            </div>

            <div className={style.formContainer}>
              <div className={style.mainText}>
                <span className={style.sloganText}>
                  Take control your life.
                </span>
                <span className={style.sloganText}>Just check in.</span>
              </div>

              <form className={style.formLogin} onSubmit={this.handleSubmit}>
                <p className={style.textEmail}>
                  E-mail<span className={style.star}>*</span>
                </p>
                <input
                  onChange={this.handleChange}
                  value={email}
                  type="email"
                  name="email"
                  className={style.input}
                  placeholder="your@email.com"
                />
                <p className={style.password}>
                  <span className={style.textPassword}>
                    Password<span className={style.star}>*</span>
                  </span>
                  <Link to="/forgot" className={style.linkForgot}>
                    Forgot?
                  </Link>
                </p>
                <input
                  onChange={this.handleChange}
                  value={password}
                  type="password"
                  name="password"
                  className={style.input}
                  placeholder="yourpassword"
                />

                <FormButton type="submit">Log In</FormButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

const mapDispatchToProps = {
  onLogin: signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);
