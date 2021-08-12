import Calculate from '../logic/calculate';

describe('AC button', () => {
  it('clears the display and shows zero', () => {
    const BTN = 'AC';
    const data = { total: '1', operation: '+', next: '1' };
    const result = Calculate(BTN, data);
    expect(result).toEqual({ next: null, operation: null, total: null });
  });
});

describe('+/- button', () => {
  it('changes number from positive to negative or reverse', () => {
    const BTN = '+/-';
    const data = { total: '1', operation: '+/-', next: '1' };
    const result = Calculate(BTN, data);
    expect(result.next).toBe(-1);
  });
});

describe('% button', () => {
  it('counts percentage of number', () => {
    const BTN = '%';
    const data = { total: '100', operation: '%', next: '100' };
    const result = Calculate(BTN, data);
    expect(result.next).toBe(1);
  });
});

describe('/ button', () => {
  it('calculates the division', () => {
    const BTN = '/';
    const data = { total: '3', operation: '/', next: '3' };
    const result = Calculate(BTN, data);
    expect(result.total).toEqual('1');
  });
});

describe('* button', () => {
  it('multiplies two numbers', () => {
    const BTN = '*';
    const data = { total: '2', operation: '*', next: '3' };
    const result = Calculate(BTN, data);
    expect(result.total).toEqual('6');
  });
});

describe('- button', () => {
  it('subtracts two numbers', () => {
    const BTN = '=';
    const data = { total: '1', operation: '+', next: '1' };
    const result = Calculate(BTN, data);
    expect(result.total).toEqual('2');
  });
});

describe('+ button', () => {
  it('calculates the sum of two numbers', () => {
    const BTN = '=';
    const data = { total: '1', operation: '+', next: '1' };
    const result = Calculate(BTN, data);
    expect(result.total).toEqual('2');
  });
});

describe('= button', () => {
  it('calculates the result', () => {
    const BTN = '=';
    const data = { total: '1', operation: '+', next: '1' };
    const result = Calculate(BTN, data);
    expect(result).toEqual({ next: null, operation: null, total: '2' });
  });
});

describe('. button', () => {
  it('adds . after number non-decimal number', () => {
    const BTN = '.';
    const data = { total: '1', operation: '.', next: '1' };
    const result = Calculate(BTN, data);
    expect(result.next).toEqual('1.');
  });

  it('does not add . after number decimal number', () => {
    const BTN = '.';
    const data = { total: '1', operation: '.', next: '1.1' };
    const result = Calculate(BTN, data);
    expect(result.next).not.toBe('1.1.');
  });
  it('does not add . after number decimal number', () => {
    const BTN = '.';
    const data = { total: '1', operation: '.', next: '1.1' };
    const result = Calculate(BTN, data);
    expect(result.next).toBe('1.1');
  });
});
