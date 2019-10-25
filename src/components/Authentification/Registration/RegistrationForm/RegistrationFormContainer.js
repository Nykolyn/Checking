import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import { signUp } from '../../../../redux/session/sessionOperations';

const mSTP = () => ({});
const mDTP = { signUp };

export default connect(
  mSTP,
  mDTP,
)(RegistrationForm);
