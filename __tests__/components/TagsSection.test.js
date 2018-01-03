import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TagsSection from '../../src/components/TagsSection';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<TagsSection />', () => {
  const wrapper = shallow(<TagsSection />);

  it('should render TagsSection', () => {
    expect(wrapper.find('TagsSection')).toBeTruthy();
  });
});