export const ActionTypes = {
  GET_TASKS_REQUEST: 'GET_TASKS_REQUEST',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_ERROR: 'GET_TASKS_ERROR',
};

// GET TASKS
export const getTasksRequest = () => ({
  type: ActionTypes.GET_TASKS_REQUEST,
});

export const getTasksSuccess = tasks => ({
  type: ActionTypes.getTasksSuccess,
  payload: tasks,
});

export const getTasksErorr = err => ({
  type: ActionTypes.GET_TASKS_ERROR,
  payload: err,
});
