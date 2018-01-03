import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Footer from '../../src/components/Footer';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('should render Footer', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });
});