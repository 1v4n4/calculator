import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <div className="display">{result}</div>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Display;