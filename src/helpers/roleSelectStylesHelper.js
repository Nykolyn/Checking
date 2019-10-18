import chroma from 'chroma-js';

const roleStyles = {
  control: styles => ({
    ...styles,
    width: '100%',
    padding: 0,
    borderRadius: 0,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
  }),
  valueContainer: (styles, { selectProps: { value } }) => {
    return {
      ...styles,
      height: '40px',
      backgroundColor: value ? value.color : '#cdd0d9', //! !!!!!!!!!!!!!!
    };
  },
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
  indicatorsContainer: (styles, { selectProps: { value } }) => {
    return {
      ...styles,
      height: '40px',
      backgroundColor: value ? value.color : '#cdd0d9',
      fill: '#000',
    };
  },
  menu: styles => ({ ...styles, borderRadius: 0, margin: 0 }),
  option: (styles, { data, isDisabled, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      height: '30px',
      boxSizing: 'border-box',
      border: '1px solid #fff',
      backgroundColor: data.color,
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
};

export default roleStyles;
