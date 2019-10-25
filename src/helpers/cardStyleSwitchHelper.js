export const roleStyleSelect = role => {
  const basicStyle = {
    backgroundColor: '#cdd0d9',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    color: '#525356',
  };
  switch (role) {
    case 'Learner':
      return { ...basicStyle, backgroundColor: '#fef9de' };
    case 'Partner':
      return { ...basicStyle, backgroundColor: '#c2c9de' };
    case 'Co-worker':
      return { ...basicStyle, backgroundColor: '#d3dcd6' };
    case 'Daughter/Son':
      return { ...basicStyle, backgroundColor: '#d5ebff' };
    case 'None':
      return { ...basicStyle, backgroundColor: '#cdd0d9' };

    default:
      return basicStyle;
  }
};

export const priorityStyleSelect = priority => {};
