import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      name: '',
      className: '',
    };
  }

  render() {
    const { name, className } = this.props;
    return (
      <button type="button" className={className}>
        {name}
        {' '}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
};
