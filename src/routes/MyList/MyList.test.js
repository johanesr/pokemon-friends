import { mount } from 'enzyme';
import MyList from './index';

const wrapper = mount(<MyList />);

it("renders MyList Container correctly", () => {
  expect(wrapper).toMatchSnapshot(); // check if a container renders correctly
});