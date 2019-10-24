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

const today = (
  state = [
    {
      createdAt: '2019-10-23T09:53:08.743Z',
      date: '2019-10-23T09:53:00.163Z',
      description: '',
      isComplete: false,
      priority: 3,
      role: 'None',
      time: 'All Day',
      title: 'jjk,mm,',
      updatedAt: '2019-10-23T09:53:08.743Z',
      userId: '5dadd7d71cb3fe662bd1a846',
      __v: 0,
      _id: '5db0230421afc84983dfd58e',
    },
  ],
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.POST_TODAY_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_TODAY_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_TODAY_TASK_SUCCESS:
    case ActionTypes.REMOVE_TODAY_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const tomorrow = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_TOMORROW_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_TOMORROW_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_TOMORROW_TASK_SUCCESS:
    case ActionTypes.REMOVE_TOMORROW_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const next = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_NEXT_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_NEXT_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.DELETE_NEXT_TASK_SUCCESS:
    case ActionTypes.REMOVE_NEXT_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const after = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_AFTER_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.UPDATE_AFTER_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id), payload];
    case ActionTypes.REMOVE_AFTER_TASK_SUCCESS:
    case ActionTypes.DELETE_AFTER_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const burnedOut = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_BURNED_TASK_SUCCESS:
      return [...state, payload];
    case ActionTypes.DELETE_BURNED_TASK_SUCCESS:
    case ActionTypes.REMOVE_BURNED_TASK_SUCCESS:
      return [...state.filter(task => task._id !== payload._id)];
    default:
      return state;
  }
};

const done = (state = [], { type, payload }) => null;

const taskInEditMode = (
  state = {
    role: 'Partner',
    time: 'All Day',
    priority: 3,
    isComplete: false,
    _id: '5db19fb87f221a047b82f150',
    date: '2019-10-24T21:00:00.000Z',
    title: 'test',
    description: '',
    userId: '5dacf2074a4c8a1b350d7bbe',
    createdAt: '2019-10-24T12:57:28.740Z',
    updatedAt: '2019-10-24T12:57:28.740Z',
    __v: 0,
  },
  { type, payload },
) => {
  switch (type) {
    case ActionTypes.PUT_TASK_TO_EDIT_MODE:
      return payload;
    case ActionTypes.REMOVE_TASK_FROM_EDIT_MODE:
      return null;
    default:
      return state;
  }
};

const todayTomorrow = combineReducers({ today, tomorrow });
const nextAfter = combineReducers({ next, after });
const tasks = combineReducers({
  todayTomorrow,
  nextAfter,
  burnedOut,
  done,
  taskInEditMode,
});

export default tasks;
