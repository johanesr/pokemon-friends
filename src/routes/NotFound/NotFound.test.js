import { shallow } from 'enzyme';
import NotFound from './index';

const wrapper = shallow(<NotFound />);

it("renders NotFound Container correctly", () => {
  expect(wrapper).toMatchSnapshot(); // check if a container renders correctly
});