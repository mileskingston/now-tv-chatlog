import { getMessages, getMembers } from './data';

export function getData() {
  return Promise
    .all([getMessagesData(), getMembersData()])
    .then((data) => {
      const messageData = data[0];
      const membersData = data[1];

      let chatLogData = [];

      for (let i = 0; i < messageData.length; i++) {
        chatLogData[i] = {
          messageId: messageData[i].id,
          userId: messageData[i].userId,
          message: messageData[i].message,
          timestamp: messageData[i].timestamp,
        };
        for (let j = 0; j < membersData.length; j++) {
          if (messageData[i].userId === membersData[j].id) {
            chatLogData[i].email = membersData[j].email;
            chatLogData[i].avatar = membersData[j].avatar;
            chatLogData[i].fullName = `${membersData[j].firstName} ${membersData[j].lastName}`;
          }
        }
      }
      return chatLogData;
    }
  );
}

export function getMembersData() {
  return getMembers().then((result) => { return result });
}

export function getMessagesData() {
  return getMessages().then((result) => { return result });
}