import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { isAuthentificated } from '../../redux/session/sessionSelectors';
// import {} from '../../redux/session/sessionActions';

const authRedirect = ComposedComponent => {
  class Redirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
    };

    componentDidMount() {
      const { authentificated, history } = this.props;
      if (!authentificated) return;

      history.push('/dashboard');
    }

    componentDidUpdate() {
      const { authentificated, location, history } = this.props;
      if (!authentificated) return;
      if (location.state && location.state.from) {
        history.push(location.state.from);
      }

      history.push('/dashboard');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mSTP = state => ({ authentificated: isAuthentificated(state) });

  return connect(
    mSTP,
    null,
  )(Redirect);
};

export default authRedirect;
