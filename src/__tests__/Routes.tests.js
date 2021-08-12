import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Routes from '../Routes';

it('renders website correctly', () => {
  const route = renderer.create(<Routes />).toJSON();
  expect(route).toMatchSnapshot();
});
