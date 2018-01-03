import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RootContainer from '../../src/containers/RootContainer';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<RootContainer />', () => {
  const state = {
  	comments: {
  	  commentsList: [],
  	},
  };
  const store = mockStore({ ...state });
  const wrapper = mount(<Provider store={store}>
  	  <RootContainer />
  	</Provider>);

  it('should render RootContainer', () => {
    expect(wrapper.find('RootContainer')).toBeTruthy();
  });
});