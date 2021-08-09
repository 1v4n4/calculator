import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    const calculation = Calculate(name, data);

    this.setState({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (!operation) {
      result = total;
    } else if (operation === '+/-') {
      if (!next || next === '0') {
        result = total;
      } else {
        result = next;
      }
    } else {
      result = !next ? operation : next;
    }

    return (
      <>
        <Display result={result}/>
        <ButtonPanel clickHandler={this.handleClick}/>

      </>
    );
  }
}
