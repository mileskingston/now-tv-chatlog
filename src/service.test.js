import { getData, getMessagesData, getMembersData } from './service';
import { getMembers, getMessages } from './data';
import { mockMessages, mockMembers } from './mockData';

jest.mock('./data.js');

describe('service', () => {
  it('getMembers data should match mockMembers', () => {
    return getMembers()
      .then((results) => {
        expect(results).toEqual(mockMembers);
      });
  });

  it('getMessages data should match mockMessages', () => {
    return getMessages()
      .then((results) => {
        expect(results).toEqual(mockMessages);
      });
  });

  it('getData data should match', () => {
    console.log(getData().resolve((data) => { data }));
    return getData()
      .then((results) => {
        expect(results).toEqual(mockMessages);
      });
  });
});
