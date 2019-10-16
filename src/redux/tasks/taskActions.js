export const ActionTypes = {
  GET_TASKS_REQUEST: 'GET_TASKS_REQUEST',
  GET_TASKS_SUCCESS: 'GET_TASKS_REQUEST',
  GET_TASKS_ERROR: 'GET_TASKS_REQUEST',
};

export const getTasksRequest = () => ({
  type: ActionTypes['/tasks/GET_TASKS_SUCCESS'],
});
