import { connect } from 'react-redux';
import {
  taskPopUpEditOpen,
  taskPopUpEditClose,
  taskPopUpCreateOpen,
} from '../../../../redux/componentController/componentActions';
import {
  putTaskToEditMode,
  removeTaskFromEditMode,
} from '../../../../redux/tasks/taskActions';

import EditButton from './EditButton';

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
  TaskToEditMode: task => dispatch(putTaskToEditMode(task)),
  PopUpCreateOpen: () => dispatch(taskPopUpCreateOpen()),
  taskPopUpEditClose: () => dispatch(taskPopUpEditClose()),
  removeTaskFromEditMode: () => dispatch(removeTaskFromEditMode()),
});

export default connect(
  null,
  mDtP,
)(EditButton);
