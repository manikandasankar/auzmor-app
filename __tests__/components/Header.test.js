import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '../../src/components/Header';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('should render Header', () => {
    expect(wrapper.find('Header')).toBeTruthy();
  });
});