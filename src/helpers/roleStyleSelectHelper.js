import React from 'react';
import style from '../components/Dashboard/Card/Card.module.css';

const roleStyleSelectHelper = (role, priority) => {
  return (
    <header className={style.header + role}>
      <p className={style.cardHeader__role}>{role}</p>
      <p className={style.cardHeader__priority + priority}>{priority}</p>
    </header>
  );
};

export default roleStyleSelectHelper;
