import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

it('renders Calculator page correctly', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
