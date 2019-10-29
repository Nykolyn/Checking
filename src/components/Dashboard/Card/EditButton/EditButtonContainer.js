import { connect } from 'react-redux';
import {
  taskPopUpEditOpen,
  taskPopUpCreateOpen,
} from '../../../../redux/componentController/componentActions';
import { putTaskToEditMode } from '../../../../redux/tasks/taskActions';

import EditButton from './EditButton';

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
  TaskToEditMode: task => dispatch(putTaskToEditMode(task)),
  PopUpCreateOpen: () => dispatch(taskPopUpCreateOpen()),
});

export default connect(
  null,
  mDtP,
)(EditButton);
