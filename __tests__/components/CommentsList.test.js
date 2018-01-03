import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CommentsList from '../../src/components/CommentsList';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CommentsList />', () => {
  const state = {
  	comments: {
  	  commentsList: [
        {
          url: 'https://cdn.dribbble.com/users/1333064/avatars/small/7660c95c80ce9f341df7f7db574bb24c.png?1488144609',
          userName: 'Dimitris Chronopoulos',
          comment: 'Love it!',
          likesCount: '',
          postedOn: 'about 1 month ago',
        },
      ],
  	},
  };
  const event = {
    preventDefault: jest.fn(),
  };
  const store = mockStore({ ...state });
  const wrapper = mount(<CommentsList />, { context: { store: store } });
  const component = wrapper.find('CommentsList');

  it('should render CommentsList', () => {
    expect(wrapper.find('CommentsList')).toBeTruthy();
  });

  it('should click newest comments', () => {
    const newestButton = wrapper.find('#newest').at(0).props();
    newestButton.onClick(event);
    expect(component.node.state.isLatestSelected).toBe('selected');
  });

  it('should click liked comments', () => {
    const likedButton = wrapper.find('#liked').at(0).props();
    likedButton.onClick(event);
    expect(component.node.state.islikedSelected).toBe('selected');
  });

  it('should click oldest comments', () => {
    const oldestButton = wrapper.find('#oldest').at(0).props();
    oldestButton.onClick(event);
    expect(component.node.state.isOldestSelected).toBe('selected');
  });
});