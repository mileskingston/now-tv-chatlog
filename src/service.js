import { getMessages, getMembers } from './data';

export function getData() {
  let chatLogData = [];

  return Promise
    .all([getMessagesData(), getMembersData()])
    .then((data) => {
      const messageData = data[0];
      const membersData = data[1];

      for (let i = 0; i < messageData.length; i++) {
        for (let j = 0; j < membersData.length; j++) {
          if (messageData[i].userId === membersData[j].id) {
            chatLogData[i] = {
              messageId: messageData[i].id,
              userId: messageData[i].userId,
              fullName: `${membersData[j].firstName} ${membersData[j].lastName}`,
              timestamp: messageData[i].timestamp,
              email: membersData[j].email,
              message: messageData[i].message,
              avatar: membersData[j].avatar,
            };
          }
        }
      }
      return chatLogData;
    },
    (error) => {
      return error;
    }
  );
}

export function getMembersData() {
  return getMembers().then((result) => { return result });
}

export function getMessagesData() {
  return getMessages().then((result) => { return result });
}