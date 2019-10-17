/* eslint-disable */

import { combineReducers } from 'redux';

const modalDeleteError = (state = null, { type, payload }) => {
  return state;
};
const modalLogoutError = (state = null, { type, payload }) => {
  return state;
};
const taskPopUpError = (state = null, { type, payload }) => {
  return state;
};
const loginError = (state = null, { type, payload }) => {
  return state;
};
const registrationError = (state = null, { type, payload }) => {
  return state;
};

export default combineReducers({
  modalDeleteError,
  modalLogoutError,
  taskPopUpError,
  loginError,
  registrationError,
});
