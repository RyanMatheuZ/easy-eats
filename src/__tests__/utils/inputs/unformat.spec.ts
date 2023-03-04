import { unformat } from '@utils/inputs/unformat';

describe('Unformat utils function', () => {
  describe('To non-digit characters', () => {
    it('should remove non-digit characters from a string', () => {
      const resultOne = unformat('1-2-3');
      const resultTwo = unformat('a1b2c3');
      const resultThree = unformat('12.34');
      const resultFour = unformat(' 1 2 3 ');

      expect(resultOne).toBe('123');
      expect(resultTwo).toBe('123');
      expect(resultThree).toBe('1234');
      expect(resultFour).toBe('123');
    });

    it('should return the input string if it contains only digits', () => {
      const resultOne = unformat('123');
      const resultTwo = unformat('0123456789');

      expect(resultOne).toBe('123');
      expect(resultTwo).toBe('0123456789');
    });
  });
});
