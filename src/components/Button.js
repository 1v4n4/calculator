import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      name: '',
      className: '',
    }
  }

  render() {
    return (
      <button className={this.props.className}>{this.props.name} </button>
    )
  }
}

Button.defaultProps = {
  className: 'button'
};