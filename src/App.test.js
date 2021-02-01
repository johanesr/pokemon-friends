import { shallow } from 'enzyme';
import App from './App';

it('renders app once', () => {
  expect(shallow(<App />).length).toEqual(1);
});

// it("renders app correctly", () => {
//   expect(shallow(<App />)).toMatchSnapshot(); // check if a component renders correctly
// });