import React from 'react';
// import PropTypes from 'prop-types';
import Select from 'react-select';
import roles from '../../constants/roles';
import roleStyles from '../../helpers/roleSelectStylesHelper';
import styles from './TaskPopUp.module.css';

const RoleSelect = () => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Choose Role</h4>
    <Select options={roles} styles={roleStyles} />
  </div>
);

export default RoleSelect;
