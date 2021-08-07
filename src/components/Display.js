import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      result: '',
    };
  }

  render() {
    const { result } = this.props;
    return <div className="display">{result}</div>;
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
