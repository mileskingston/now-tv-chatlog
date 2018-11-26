import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message Component', () => {
  const mockProps = {
    name: 'Joe Bloggs',
    time: '2016-11-09T05:04:58Z',
    message: 'Hello World',
    email: 'joe@bloggs.com',
    avatar: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
  };
  const wrapper = shallow(<Message {...mockProps} />);

  it('expect wrapper to have been rendered', () => {
    expect(wrapper.find('.message').length).toBe(1);
  });

  it('expect avatar to have been rendered', () => {
    expect(wrapper.find('.message-avatar').length).toBe(1);
  });

 it('expect no avatar to have been rendered if no prop', () => {
    const wrapper = shallow(
      <Message
        name="Joe Bloggs"
        time="2016-11-09T05:04:58Z"
        message="Hello World"
        email="joe@bloggs.com"
      />
    );
    expect(wrapper.find('.message-avatar').length).toBe(0);
  });

  it('expect name to match props', () => {
    expect(wrapper.find('.message__name').text()).toBe('Joe Bloggs');
  });

  it('expect email to match props', () => {
    expect(wrapper.find('.message__email').text()).toBe('joe@bloggs.com');
  });

  it('expect email to match props', () => {
    expect(wrapper.find('.message__text').text()).toBe('Hello World');
  });

  it('expect email to match props', () => {
    expect(wrapper.find('.message-avatar img').prop('src')).toBe('http://dummyimage.com/100x100.jpg/ff4444/ffffff');
  });

  it('expect email to match props', () => {
    expect(wrapper.find('.message__time').text()).toBe('2016-11-9 05:04:58');
  });
});
