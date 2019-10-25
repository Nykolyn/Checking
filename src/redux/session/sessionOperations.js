import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
  refreshUserRequest,
  logOutRequest,
  logOutSuccess,
  logOutError,
  refreshUserSuccess,
  refreshUserError,
} from './sessionActions';
import { getToken } from './sessionSelectors';

axios.defaults.baseURL = 'https://cheking.goit.co.ua/api/v1';

const TASKS_DEFAULT = {
  todayTomorrow: {
    today: [],
    tomorrow: [],
  },
  nextAfter: {
    next: [],
    after: [],
  },
  burnedOut: [{}],
  done: [],
};

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
    .post('/auth/register', credentials)
    .then(response => dispatch(signUpSuccesss(response.data.user)))
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('/auth/login', credentials)
    .then(response => dispatch(signInSuccesss(response.data)))
    .catch(error => dispatch(signInError(error.response.data)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  setAuthToken(token);
  dispatch(refreshUserRequest());
  axios
    .get('/tasks')
    .then(response => dispatch(refreshUserSuccess(response.data.tasks)))
    .catch(error => {
      if (
        error.response.data.error ===
        "Cannot read property 'today' of undefined"
      ) {
        return dispatch(refreshUserSuccess(TASKS_DEFAULT));
      }

      return dispatch(refreshUserError(error));
    });
};

export const signOut = () => (dispatch, getState) => {
  dispatch(logOutRequest());

  const token = getToken(getState());
  if (!token) return;
  setAuthToken(token);

  axios
    .get('logout')
    .then(() => {
      dispatch(logOutSuccess());
      clearAuthToken();
    })
    .catch(error => {
      dispatch(logOutError(error));
    });
};
