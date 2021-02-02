import { mount } from 'enzyme';
import PaginationBar from './index';

import configureStore from 'redux-mock-store' //ES6 modules
const middlewares = []
const mockStore = configureStore(middlewares)

const initialState ={ changePage: {curPage: 0} };
const store = mockStore(initialState)
const wrapper = mount(<PaginationBar store={store}/>);

const initialState2 ={ changePage: {curPage: 1} };
const store2 = mockStore(initialState2)
const wrapper2 = mount(<PaginationBar store={store2}/>);

const initialState3 ={ changePage: {curPage: 111} };
const store3 = mockStore(initialState3)
const wrapper3 = mount(<PaginationBar store={store3}/>);

it("renders PaginationBar correctly", () => {
  expect(wrapper).toMatchSnapshot(); // check if a component renders correctly
});

it("renders next buttons correctly", () => {
  expect(wrapper.find('#next-button').length).toBe(1);
  wrapper.find('#next-button').simulate('click');

  expect(wrapper3.find('#next-button').length).toBe(0);
});

it('renders back buttons correctly', () => {
  expect(wrapper.find('#back-button').length).toBe(0);

  expect(wrapper2.find('#back-button').length).toBe(1);
  wrapper.find('#next-button').simulate('click');
});

it('renders input correctly', () => {
  expect(wrapper.find('#page-input').length).toBe(1);
});