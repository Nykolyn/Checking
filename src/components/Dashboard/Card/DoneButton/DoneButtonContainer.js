import { connect } from 'react-redux';
import DoneButton from './DoneButton';
import {
  updateTask,
  removeTask,
} from '../../../../redux/tasks/tasksOperations';
import { refreshUserRequest } from '../../../../redux/session/sessionActions';

const mDtP = dispatch => ({
  removeTask: task => dispatch(removeTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  refreshUserRequest: () => dispatch(refreshUserRequest()),
});

export default connect(
  null,
  mDtP,
)(DoneButton);
