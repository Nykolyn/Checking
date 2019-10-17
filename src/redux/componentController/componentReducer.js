/* eslint-disable */

import { combineReducers } from 'redux';
import { ActionTypes } from './componentActions';

const modalDeleteTaskOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.MODAL_DELETE_TASK_OPEN:
      return true;

    default:
      return state;
  }
};

const modalLogoutOpen = (state = false, { type, payload }) => {
  return state;
};

const taskPopUpOpen = (state = false, { type, payload }) => {
  return state;
};

const burgerMenuOpen = (state = false, { type, payload }) => {
  return state;
};

const createTaskButtonOpen = (state = false, { type, payload }) => {
  return state;
};

const tabsListOpen = (state = false, { type, payload }) => {
  return state;
};

export default combineReducers({
  modalDeleteTaskOpen,
  modalLogoutOpen,
  taskPopUpOpen,
  burgerMenuOpen,
  createTaskButtonOpen,
  tabsListOpen,
});
