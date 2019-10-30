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

export const priorityStyleSelect = priority => {
  const basicStyle = {
    display: 'block',
    backgroundColor: '#fff',
    marginRight: '20px',
    padding: '3px 9px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '50%',
    marginLeft: '10px',
    textAlign: 'center',
  };

  switch (priority) {
    case 1:
      return { ...basicStyle, color: '#f4715c' };
    case 2:
      return { ...basicStyle, color: '#5ec455', padding: '3px 8px' };
    case 3:
      return { display: 'none' };
    default:
      return basicStyle;
  }
};

export const titleSlicer = title => {
  let sliceTitle;
  sliceTitle = title;

  if (title.length > 50) {
    sliceTitle = title.trim().slice(0, 49);
    return `${sliceTitle.slice(
      0,
      sliceTitle.lastIndexOf(' ') > 45
        ? sliceTitle.length
        : sliceTitle.lastIndexOf(' '),
    )}...`;
  }

  return sliceTitle;
};

export const descriptionSlicer = description => {
  let sliceDescription;
  sliceDescription = description;

  if (description.length > 100) {
    sliceDescription = description.trim().slice(0, 99);
    return `${sliceDescription.slice(
      0,
      sliceDescription.lastIndexOf(' ') > 96
        ? sliceDescription.length
        : sliceDescription.lastIndexOf(' '),
    )}...`;
  }
  return sliceDescription;
};

export const dateFormatter = date => {
  const dateNow = new Date(date);
  const isYearAdd =
    dateNow.getFullYear() === new Date().getFullYear() ? 10 : 15;
  return String(dateNow).slice(4, isYearAdd);
};
