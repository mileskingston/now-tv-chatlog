import React from 'react';
import Chatlog from './Chatlog';
import { shallow } from 'enzyme';

describe('Chatlog Component', () => {
  const wrapper = shallow(<Chatlog />);
  const getData = jest.fn();
  const mockData = {
    avatar: null,
    email: "abakera@craigslist.org",
    message: "Mauris lacinia sapien quis libero.",
    name: "Amanda Baker",
    time: "2017-02-27T13:47:25Z",
  }

  describe('render', () => {
    it('expect wrapper to have been rendered', () => {
      expect(wrapper.find('.chatlog').length).toBe(1);
    });
  
      it('expect no message to be rendered if error', () => {
      const instance = wrapper.instance();
      
      instance.setState({ error: 'no messages' });
      expect(wrapper.find('.message').length).toBe(0);
    });

    it('expect no message to be rendered if isLoading', () => {
      const instance = wrapper.instance();
      
      instance.setState({ isLoading: true });
      expect(wrapper.find('.message').length).toBe(0);
    });
  });

  describe('componentDidMount', () => {
    it('expect fetchData to be called on componentDidMount', () => {
      const instance = wrapper.instance();
      instance.fetchData = jest.fn();
  
      instance.componentDidMount();
      expect(instance.fetchData).toHaveBeenCalled();
    });
  });
});

// promise then and error