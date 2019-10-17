import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mSTP = state => state;
const mDTP = () => null;

export default connect(
  mSTP,
  mDTP,
)(Dashboard);
