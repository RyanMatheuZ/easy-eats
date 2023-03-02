import { messages } from '@utils/datas/messages';

export const randomNumber = (finalRange: number): number => {
  // The initial range will always be 0
  return Math.floor(Math.random() * finalRange);
};

export const randomMessage = (number: number): string => {
  return messages[number];
};
