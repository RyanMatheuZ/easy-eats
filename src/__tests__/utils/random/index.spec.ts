import { faker } from '@faker-js/faker';

import { messages } from '@utils/datas/messages';

import { randomNumber, randomMessage } from '@utils/random';

const { numeric } = faker.random;

describe('Cell phone utils function', () => {
  describe('To number', () => {
    const finalRange = +numeric(3);
    const result = randomNumber(finalRange);

    it('should generate a random number between 0 and the final range', () => {
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(finalRange);
    });

    it('should generate a number with the correct type', () => {
      expect(typeof result).toBe('number');
    });
  });

  describe('To message', () => {
    it('should return a message from the messages array', () => {
      for (let i = 0; i <= messages.length; i++) {
        const result = randomMessage(i);

        expect(result).toBe(messages[i]);
      }
    });

    it('should return undefined when given an invalid index', () => {
      const message = randomMessage(messages.length + 10);

      expect(message).toBeUndefined();
    });
  });
});
