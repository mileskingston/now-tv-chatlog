import React from 'react';
import { shallow } from 'enzyme';
import { getMessages, getMembers } from './data';
import { mockMessages, mockMembers } from './mockData';

jest.mock('./data.js');

describe('data functions', () => {
  describe('getMessages', () => {
    it('expect wrapper to have been rendered', () => {
      expect.assertions(1);
      return getMembers()
        .then((result) => {
          expect(result).toEqual(mockMembers);
        });
    });
  });

  describe('getMembers', () => {
    it('expect fetchData to be called on componentDidMount', () => {
      expect.assertions(1);
      return getMessages()
        .then((result) => {
          expect(result).toEqual(mockMessages);
        });
    });
  });
});