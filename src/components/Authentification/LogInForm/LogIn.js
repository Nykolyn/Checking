import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import img from '../../../img/pic.png';
import style from './LogInForm.module.css';

class LogIn extends Component {
  state = {};

  render() {
    return (
      <div className={style.wrapLogin}>
        <div className={style.header}>HEADER</div>
        <div className={style.loginContainer}>
          <div className={style.imgContainer}>
            {/* <img alt="Checking App" src={img} /> */}
          </div>

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

              <form className={style.formLogin}>
                <p className={style.textEmail}>
                  E-mail<span className={style.star}>*</span>
                </p>
                <input
                  className={style.input}
                  type="email"
                  name="email"
                  // value=""
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
                  className={style.input}
                  type="password"
                  name="password"
                  // value="password"
                  placeholder="yourpassword"
                />

                <button className={style.buttonLogin} type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
