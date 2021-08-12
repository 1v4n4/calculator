import React, { useState } from 'react';
import '../CSS/calculator.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = (name) => {
    setData(Calculate(name, data));
  };

  // const { total, next } = data;

  return (
    <div className="calculatorContainer">
      <h2>Let’s do some math!</h2>
      <div className="calculatorDiv">
        <Display result={data.next || data.total || '0'} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};
export default Calculator;
