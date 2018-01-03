import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HomeContainer from '../../src/containers/HomeContainer';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<HomeContainer />', () => {
  const state = {
  	comments: {
  	  commentsList: [],
  	},
  };
  const store = mockStore({ ...state });
  const wrapper = mount(<Provider store={store}>
  	  <HomeContainer />
  	</Provider>);
  const component = wrapper.find('HomeContainer');

  it('should render HomeContainer', () => {
    expect(wrapper.find('HomeContainer')).toBeTruthy();
  });

  it('should click zoomableImageSection', () => {
  	const zoomableSection = wrapper.find('#zoomableImageSection').at(0).props();
  	const event = {
  	  preventDefault: jest.fn(),
  	};
  	zoomableSection.onClick(event);
  	expect(component.node.state.showZoomableImage).toBeTruthy();
  });
});