import { combineReducers } from 'redux';
import { ActionTypes } from './taskActions';

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_TASKS_SUCCESS:
      return payload.tasks;
    default:
      return state;
  }
};

export default combineReducers({ tasks });
