import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => {
  const className = name === '0' ? 'double' : 'button';
  return (
    <button
      type="button"
      className={className}
      value={name}
      onClick={() => handleClick(name)}
    >
      {name}
      {' '}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
