import { connect } from 'react-redux';
import { postTask } from '../../redux/tasks/tasksOperations';
import TaskPopUp from './TaskPopUp';

const mDTP = { postTask };

export default connect(
  null,
  mDTP,
)(TaskPopUp);
