import { combineReducers } from 'redux';
import { ActionTypes } from './taskActions';

// const tasks = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.GET_TASKS_SUCCESS:
//       return payload.tasks;
//     default:
//       return state;
//   }
// };

const today = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_TODAY_TASK_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

const tomorrow = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_TOMORROW_TASK_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

const next = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_NEXT_TASK_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

const after = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_AFTER_TASK_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

const burnedOut = (state = [], { type, payload }) => null;

const done = (state = [], { type, payload }) => null;

const todayTomorrow = combineReducers({ today, tomorrow });
const nextAfter = combineReducers({ next, after });
const tasks = combineReducers({ todayTomorrow, nextAfter, burnedOut, done });

export default tasks;
