import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ShotStats from '../../src/components/ShotStats';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ShotStats />', () => {
  const state = {
    comments: {
      commentsList: [],
    },
  };
  const store = mockStore({ ...state });
  const wrapper = mount(<Provider store={store}>
      <ShotStats />
    </Provider>);
  const component = wrapper.find('ShotStats');

  it('should render ShotStats', () => {
    expect(wrapper.find('ShotStats')).toBeTruthy();
  });
  it('should click share button', () => {
    const shareButton = wrapper.find('#shareButton').at(0).props();
    const event = {
      preventDefault: jest.fn(),
    };
    shareButton.onClick(event);
    expect(component.node.state.showSocialShareSheet).toBeTruthy();
  });
});