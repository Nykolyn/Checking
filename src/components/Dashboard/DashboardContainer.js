import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { taskPopUpCreateIsOpen } from '../../redux/componentController/controllerSelectrors';

const mSTP = state => ({
  taskCreateOpen: taskPopUpCreateIsOpen(state),
});
const mDTP = () => ({});

export default connect(
  mSTP,
  mDTP,
)(Dashboard);
