import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const options = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'total', label: 'Total' },
];

const customStyles = {
  indicatorsContainer: base => ({
    margin: 0,
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  }),
  container: base => ({
    fontSize: 20,
    position: 'absolute',
    width: '25%',
    height: '100%',
    backgroundColor: 'transparent',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-3%)',
  }),
  menu: base => ({
    border: 0,
    marginTop: 0,
  }),
  menuList: () => ({
    textAlign: 'center',
  }),
  indicatorSeparator: base => ({
    display: 'none',
  }),
  singleValue: () => ({
    fontSize: 26,
    fontWeight: 500,
    color: '#869096',
    width: '50%',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    color: '#869096',
    display: state.isSelected ? 'none' : null,
    padding: 4,
    fontWeight: 500,
    fontSize: 15,
  }),
};

class Selector extends Component {
  state = {
    selectedOption: { value: 'week', label: 'Week' },
  };

  componentDidMount() {
    const { status } = this.props;
    const { selectedOption } = this.state;
    status(selectedOption.value);
  }

  handleChange = selectedOption => {
    const { status } = this.props;
    this.setState({ selectedOption });

    status(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        isSearchable={false}
        styles={customStyles}
        value={selectedOption}
        defaultValue={{ value: 'week', label: 'Week' }}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
const mapStateToProps = state => ({ tasks: state });

export default connect(
  mapStateToProps,
  null,
)(Selector);
