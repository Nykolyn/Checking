import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mSTP = state => state;
const mDTP = () => ({});

export default connect(
  mSTP,
  mDTP,
)(Dashboard);
