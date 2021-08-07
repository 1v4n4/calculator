import Big from 'big.js';

const Operate = ( op=null, num1 = null, num2 = null) => {
  let result = 0;
  const operations = ['+', '-', '*', '/', '%']
  if (!num2 && op != '%') return num1
  if (!num1 || !op) return 'Error'
  const n1 = new Big(num1);
  if (num2) {
  const n2 = new Big(num2);
  }
  if (operations.includes(op)) {
    switch (op) {
      case '-':
        result = n1.minus(n2);
        break;
      case '+':
        result = n1.plus(n2);
        break;
      case '*':
        result = n1.times(n2);
        break;
      case '/':
        try {
          result = n1.div(n2);
        } catch (error) {
          result = 'Infinity';
        }
        break;
      case '%':
          result = n1.div(100);
    }
    return result.toString();
  }
  else {
  return 'Error';
  }

}

export default Operate;
