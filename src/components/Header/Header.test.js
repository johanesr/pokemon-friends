import { shallow } from 'enzyme';
import Header from './index';

const wrapper = shallow(<Header />);

it("renders header correctly", () => {
  expect(wrapper).toMatchSnapshot(); // check if a component renders correctly
});

it('renders burger button click correctly', () => {
  const burgerButton = wrapper.find('.toggle-button')
  burgerButton.simulate('click');
  expect(wrapper).toMatchSnapshot();
});