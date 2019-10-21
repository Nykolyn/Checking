export const ActionTypes = {
  GET_TASKS_REQUEST: 'GET_TASKS_REQUEST',
  GET_TASKS_SUCCESS: 'GET_TASKS_SUCCESS',
  GET_TASKS_ERROR: 'GET_TASKS_ERROR',

  POST_TODAY_TASK_REQUEST: 'POST_TODAY_TASK_REQUEST',
  POST_TODAY_TASK_SUCCESS: 'POST_TODAY_TASK_SUCCESS',
  POST_TODAY_TASK_ERROR: 'POST_TODAY_TASK_ERROR',

  POST_TOMORROW_TASK_REQUEST: 'POST_TOMORROW_TASK_REQUEST',
  POST_TOMORROW_TASK_SUCCESS: 'POST_TOMORROW_TASK_SUCCESS',
  POST_TOMORROW_TASK_ERROR: 'POST_TOMORROW_TASK_ERROR',

  POST_NEXT_TASK_REQUEST: 'POST_NEXT_TASK_REQUEST',
  POST_NEXT_TASK_SUCCESS: 'POST_NEXT_TASK_SUCCESS',
  POST_NEXT_TASK_ERROR: 'POST_NEXT_TASK_ERROR',

  POST_AFTER_TASK_REQUEST: 'POST_AFTER_TASK_REQUEST',
  POST_AFTER_TASK_SUCCESS: 'POST_AFTER_TASK_SUCCESS',
  POST_AFTER_TASK_ERROR: 'POST_AFTER_TASK_ERROR',

  UPDATE_TASK_REQUEST: 'UPDATE_TASK_REQUEST',
  UPDATE_TASK_SUCCESS: 'UPDATE_TASK_SUCCESS',
  UPDATE_TASK_ERROR: 'UPDATE_TASK_ERROR',

  DELETE_TASK_REQUEST: 'DELETE_TASK_REQUEST',
  DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
  DELETE_TASK_ERROR: 'DELETE_TASK_ERROR',
};

// GET TASKS

export const getTasksRequest = () => ({
  type: ActionTypes.GET_TASKS_REQUEST,
});

export const getTasksSuccess = tasks => ({
  type: ActionTypes.GET_TASKS_SUCCESS,
  payload: tasks,
});

export const getTasksErorr = err => ({
  type: ActionTypes.GET_TASKS_ERROR,
  payload: err,
});

// POST TODAY TASK

export const postTaskTodayRequest = () => ({
  type: ActionTypes.POST_TODAY_TASK_REQUEST,
});

export const postTaskTodaySuccess = task => ({
  type: ActionTypes.POST_TODAY_TASK_SUCCESS,
  payload: task,
});

export const postTaskTodayError = err => ({
  type: ActionTypes.POST_TODAY_TASK_ERROR,
  payload: err,
});

// POST TOMORROW TASK

export const postTaskTomorrowRequest = () => ({
  type: ActionTypes.POST_TOMORROW_TASK_REQUEST,
});

export const postTaskTomorrowSuccess = task => ({
  type: ActionTypes.POST_TOMORROW_TASK_SUCCESS,
  payload: task,
});

export const postTaskTomorrowError = err => ({
  type: ActionTypes.POST_TOMORROW_TASK_ERROR,
  payload: err,
});

// POST NEXT WEEK TASK

export const postTaskNextRequest = () => ({
  type: ActionTypes.POST_NEXT_TASK_REQUEST,
});

export const postTaskNextSuccess = task => ({
  type: ActionTypes.POST_NEXT_TASK_SUCCESS,
  payload: task,
});

export const postTaskNextError = err => ({
  type: ActionTypes.POST_NEXT_TASK_ERROR,
  payload: err,
});

// POST AFTER NEXT WEEK TASK

export const postTaskAfterRequest = () => ({
  type: ActionTypes.POST_AFTER_TASK_REQUEST,
});

export const postTaskAfterSuccess = task => ({
  type: ActionTypes.POST_AFTER_TASK_SUCCESS,
  payload: task,
});

export const postTaskAfterError = err => ({
  type: ActionTypes.POST_AFTER_TASK_ERROR,
  payload: err,
});

// UPDATE TASK

export const updateTaskRequest = () => ({
  type: ActionTypes.POST_TASKS_REQUEST,
});

export const updateTaskSuccess = task => ({
  type: ActionTypes.UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskErorr = err => ({
  type: ActionTypes.UPDATE_TASK_ERROR,
  payload: err,
});

// DELETE TASK

export const deleteTaskRequest = () => ({
  type: ActionTypes.DELETE_TASKS_REQUEST,
});

export const deleteTaskSuccess = task => ({
  type: ActionTypes.DELETE_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskErorr = err => ({
  type: ActionTypes.DELETE_TASK_ERROR,
  payload: err,
});
