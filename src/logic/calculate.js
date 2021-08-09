import Operate from './operate';

const Calculate = (btnName, dataObj) => {
  let { total, next, operation } = dataObj;
  const operations = ['+', '*', '-', '/'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (btnName === '%') {
    total *= 0.01;
    next *= 0.01;
  }

  if (btnName === '=') {
    total = Operate(total, operation, next);
    next = null;
    operation = null;
  }

  if (btnName === '.') {
    if (!total) {
      total = '0.';
    } else
    if (total && !operation) {
      const arr = total.split('');
      console.log(arr);
      if (!arr.includes('.')) {
        total += '.';
      }
    } else if (!next) {
      next = '0.';
    } else if (total && next && operation) {
      const arr1 = next.split('');
      console.log(arr1);
      if (!arr1.includes('.')) {
        next += '.';
      }
    }
  }

  if (numbers.includes(btnName)) {
    if (operation === null) {
      if (total === null) {
        total = btnName;
      } else if (typeof total !== 'number') {
        total += btnName;
      } else if (!next) {
        next = btnName;
      } else if (typeof next !== 'number') {
        next += btnName;
      }
    } else if (next === null) {
      next = btnName;
    } else {
      next += btnName;
    }
  }

  if (operations.includes(btnName)) {
    if (!total) {
      total = '0';
    }
    if (total && !next) {
      operation = btnName;
    }
    if (total && next && operation) {
      total = Operate(total, operation, next);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default Calculate;
