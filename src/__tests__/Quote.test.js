import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders Quote page correctly', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
