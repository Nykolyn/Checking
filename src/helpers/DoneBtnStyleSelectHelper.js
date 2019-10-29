const styleSelector = (inDoneTab, inBudnedOutTab) => {
  let style;
  if (inDoneTab) {
    style = {
      fill: 'green',
      backgroundColor: '#e6eeec',
      cursor: 'default',
    };
  } else if (inBudnedOutTab) {
    style = { fill: '#f25137', backgroundColor: '#f5e6e6', cursor: 'default' };
  }
  return style;
};

export default styleSelector;
