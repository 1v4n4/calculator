import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const className = name === '0' ? 'double' : 'button';
  return (
    <button
      type="button"
      className={className}
      value={name}
      onClick={() => clickHandler(name)}
    >
      {name}
      {' '}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
