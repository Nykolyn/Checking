import { connect } from 'react-redux';
import {
  taskPopUpEditOpen,
  taskPopUpCreateClose,
} from '../../../../redux/componentController/componentActions';
import { putTaskToEditMode } from '../../../../redux/tasks/taskActions';

import EditButton from './EditButton';

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
  TaskToEditMode: task => dispatch(putTaskToEditMode(task)),
  PopUpCreateClose: () => dispatch(taskPopUpCreateClose()),
});

export default connect(
  null,
  mDtP,
)(EditButton);
