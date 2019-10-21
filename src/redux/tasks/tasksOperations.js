import * as api from '../../services/tasks-api';
import * as taskHandlers from './taskActions';
import defineDispatcher from '../../helpers/dispatchHelper';
import taskTypes from '../../constants/taskTypes';

// export const getAllTasks = credentials => dispatch => {
//   return api.getTasks().then();
// };

export const postTask = task => (dispatch, getState) => {
  // const token = getToken(getState());
  // if (!token) return;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYWRkN2Q3MWNiM2ZlNjYyYmQxYTg0NiIsImlhdCI6MTU3MTY3NDA3MX0.INa2zpf5psajzYG96ZAbvj7DiYN83b7piRVuBaGvps4';

  const dispatcher = defineDispatcher(task);

  switch (dispatcher) {
    case taskTypes.TODAY:
      dispatch(taskHandlers.postTaskTodayRequest());
      break;
    case taskTypes.TOMORROW:
      dispatch(taskHandlers.postTaskTomorrowRequest());
      break;
    case taskTypes.NEXT:
      dispatch(taskHandlers.postTaskNextRequest());
      break;
    default:
      dispatch(taskHandlers.postTaskAfterRequest());
  }

  api
    .postTask(task, token)
    .then(res => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.postTaskTodaySuccess(res.task));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.postTaskTomorrowSuccess(res.task));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.postTaskNextSuccess(res.task));
          break;
        default:
          dispatch(taskHandlers.postTaskAfterSuccess(res.task));
      }
    })
    .catch(error => {
      switch (dispatcher) {
        case taskTypes.TODAY:
          dispatch(taskHandlers.postTaskTodayError(error));
          break;
        case taskTypes.TOMORROW:
          dispatch(taskHandlers.postTaskTomorrowError(error));
          break;
        case taskTypes.NEXT:
          dispatch(taskHandlers.postTaskNextError(error));
          break;
        default:
          dispatch(taskHandlers.postTaskAfterError(error));
      }
    });
};

export const updateTask = task => dispatch => {
  dispatch(taskHandlers.updateTaskRequest);
  return api
    .updateTask(task)
    .then(dispatch(taskHandlers.updateTaskSuccess(task)))
    .catch(error => dispatch(taskHandlers.updateTaskErorr(error)));
};

export const deleteTask = task => dispatch => {
  dispatch(taskHandlers.deleteTaskRequest);
  return api
    .deleteTask(task)
    .then(dispatch(taskHandlers.deleteTaskSuccess(task)))
    .catch(error => dispatch(taskHandlers.deleteTaskErorr(error)));
};
