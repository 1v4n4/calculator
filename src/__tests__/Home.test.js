import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders Home page correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
