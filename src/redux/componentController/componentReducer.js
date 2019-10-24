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

const taskPopUpСreateOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_TASK_POPUP_CREATE:
      return true;
    default:
      return state;
  }
};

const taskPopUpEditOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_TASK_POPUP_EDIT:
      return true;
    default:
      return state;
  }
};

const burgerMenuOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_BURGER_MENU:
      return !state;

    default:
      return state;
  }
};

const createTaskButtonOpen = (state = false, { type, payload }) => {
  return state;
};

const tabsListOpen = (state = false, { type, payload }) => {
  return state;
};

const burgerEvent = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_BURGER_EVENT_BUTTON:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  modalDeleteTaskOpen,
  modalLogoutOpen,
  taskPopUpСreateOpen,
  taskPopUpEditOpen,
  burgerMenuOpen,
  burgerEvent,
  createTaskButtonOpen,
  tabsListOpen,
});
