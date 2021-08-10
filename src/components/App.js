import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = (name) => {
    setData(Calculate(name, data));
  };

  // const { total, next } = data;

  return (
    <>
      <Display result={data.next || data.total} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
};
export default App;
