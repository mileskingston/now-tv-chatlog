import { getMessages, getMembers } from './data';

export function getData() {
  return Promise
    .all([getMessagesData(), getMembersData()])
    .then((data) => {
      const messageData = data[0];
      const membersData = data[1];
      const newData = messageData.map((message, index) => {
        const member = membersData.find(value => value.id === message.userId);

        let chatObject = {
          messageId: message.id,
          userId: message.userId,
          fullName: `${member.firstName} ${member.lastName}`,
          timestamp: message.timestamp,
          email: member.email,
          message: message.message,
          avatar: member.avatar,
        }

        return chatObject;
    });

    let chatlog = newData.sort((a, b) =>
      new Date(b.timestamp) - new Date(a.timestamp)
    );

    return chatlog;
  });
}

export function getMembersData() {
  return getMembers().then((result) => result);
}

export function getMessagesData() {
  return getMessages().then((result) => result);
}