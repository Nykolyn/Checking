import { connect } from 'react-redux';
import { postTask, updateTask } from '../../redux/tasks/tasksOperations';
import { modalDeleteTaskOpen } from '../../redux/componentController/componentActions';
import getAllTasks from '../../redux/tasks/tasksSelectors';
import {
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../redux/componentController/controllerSelectrors';
import TaskPopUp from './TaskPopUp';

const mSTP = state => ({
  tasks: getAllTasks(state),
  taskPopUpCreateOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditOpen: taskPopUpEditIsOpen(state),
});

const mDTP = dispatch => ({
  postTask: task => dispatch(postTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  modalDeleteTaskOpen: () => dispatch(modalDeleteTaskOpen()),
});

export default connect(
  mSTP,
  mDTP,
)(TaskPopUp);
