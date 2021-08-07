import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      result: '',
    }
  }
  render() {
    return <div className='display'>{this.props.result}</div>
  }
}

Display.defaultProps = {
  result: '0'
};