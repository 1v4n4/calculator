import renderer from 'react-test-renderer';
import Display from '../components/Display';

it('renders Display', () => {
  const display = renderer.create(<Display />).toJSON();
  expect(display).toMatchSnapshot();
});
