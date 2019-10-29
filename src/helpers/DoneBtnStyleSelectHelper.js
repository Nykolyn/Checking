const styleSelector = (inDoneTab, inBudnedOutTab) => {
  let style;
  if (inDoneTab) {
    style = { fill: 'green', backgroundColor: '#e6eeec' };
  } else if (inBudnedOutTab) {
    style = { fill: '#f25137', backgroundColor: '#f5e6e6' };
  }
  return style;
};

export default styleSelector;
