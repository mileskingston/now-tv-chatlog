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
  });

  describe('componentDidMount', () => {
    it('expect fetchData to be called on componentDidMount', () => {
      const instance = wrapper.instance();
      instance.fetchData = jest.fn();
  
      instance.componentDidMount();
      expect(instance.fetchData).toHaveBeenCalled();
    });

    it('expect no message to be rendered if error', () => {
      const instance = wrapper.instance();
      
      instance.setState({ error: 'no messages' });
      expect(wrapper.find('Message').length).toBe(0);
    });

    it('expect no message to be rendered if isLoading', () => {
      const instance = wrapper.instance();
      
      instance.setState({ isLoading: true });
      expect(wrapper.find('Message').length).toBe(0);
    });

    it('expect no message to be rendered if error', () => {
      const instance = wrapper.instance();
      
      instance.setState({ error: 'Something went wrong...' });
      expect(wrapper.find('Message').length).toBe(0);
    });

    it('expect no message to appear if the state has data, but has error', () => {
      const instance = wrapper.instance();

      instance.setState({
        error: 'Something went wrong...',
        isLoading: false,
        data: [{
          avatar: null,
          email: "abakera@craigslist.org",
          fullName: "Amanda Baker",
          message: "Mauris lacinia sapien quis libero.",
          messageId: "54e98406-d69f-42c8-adb5-c523dd0c4218",
          timestamp: "2017-02-27T13:47:25Z",
          userId: "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
        }],
      });
      expect(wrapper.find('Message').length).toBe(0);
    });

    it('expect no message to appear if the state has data, but isLoading', () => {
      const instance = wrapper.instance();

      instance.setState({
        error: '',
        isLoading: true,
        data: [{
          avatar: null,
          email: "abakera@craigslist.org",
          fullName: "Amanda Baker",
          message: "Mauris lacinia sapien quis libero.",
          messageId: "54e98406-d69f-42c8-adb5-c523dd0c4218",
          timestamp: "2017-02-27T13:47:25Z",
          userId: "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
        }],
      });
      expect(wrapper.find('Message').length).toBe(0);
    });

    it('expect a message Component to appear if the state has data, has no errors and isLoading is false', () => {
      const instance = wrapper.instance();

      instance.setState({
        error: '',
        isLoading: false,
        data: [{
          avatar: null,
          email: "abakera@craigslist.org",
          fullName: "Amanda Baker",
          message: "Mauris lacinia sapien quis libero.",
          messageId: "54e98406-d69f-42c8-adb5-c523dd0c4218",
          timestamp: "2017-02-27T13:47:25Z",
          userId: "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
        }],
      });
      expect(wrapper.find('Message').length).toBe(1);
    });

    it('expect loader to be rendered if isLoading', () => {
      const instance = wrapper.instance();
      
      instance.setState({ isLoading: true });
      expect(wrapper.find('.loading').length).toBe(1);
    });
    
    it('expect no loader to be rendered if isLoading is false', () => {
      const instance = wrapper.instance();
      
      instance.setState({ isLoading: false });
      expect(wrapper.find('.loading').length).toBe(0);
    });
  });
});
