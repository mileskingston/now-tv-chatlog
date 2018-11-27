import { mockMembers, mockMessages } from '../mockData';

const randomDelay = Math.floor(Math.random() * 400) + 100;

export function getMessages() {
  return new Promise(resolve => setTimeout(() => resolve(mockMessages), randomDelay));
}

export function getMembers() {
  return new Promise(resolve => setTimeout(() => resolve(mockMembers), randomDelay));
}