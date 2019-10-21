import { connect } from 'react-redux';
import { postTask, updateTask } from '../../redux/tasks/tasksOperations';
import getAllTasks from '../../redux/tasks/tasksSelectors';
import {
  taskPopUpCreateIsOpen,
  taskPopUpUpdateIsOpen,
} from '../../redux/componentController/controllerSelectrors';
import TaskPopUp from './TaskPopUp';

const mSTP = state => ({
  tasks: getAllTasks(state),
  taskPopUpCreateOpen: taskPopUpCreateIsOpen(state),
  taskPopUpUpdateOpen: taskPopUpUpdateIsOpen(state),
});

const mDTP = { postTask, updateTask };

export default connect(
  mSTP,
  mDTP,
)(TaskPopUp);
