import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MoreSection from '../../src/components/MoreSection';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<MoreSection />', () => {
  const wrapper = shallow(<MoreSection />);

  it('should render MoreSection', () => {
    expect(wrapper.find('MoreSection')).toBeTruthy();
  });
});