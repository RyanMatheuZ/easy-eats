import { faker } from '@faker-js/faker';

import { hasOnlyNumbers } from '@utils/inputs/has';

const { alpha, alphaNumeric, numeric } = faker.random;

describe('Has utils function', () => {
  describe('To only numbers', () => {
    it('should return TRUE for strings containing only numbers', () => {
      const result = hasOnlyNumbers(numeric(3));

      expect(result).toBe(true);
    });

    it('should return FALSE for strings containing non-numeric characters', () => {
      const resultOne = hasOnlyNumbers(alpha(3));
      const resultTwo = hasOnlyNumbers(alphaNumeric(3));
      const resultThree = hasOnlyNumbers(`${numeric(3)} ${numeric(3)} ${numeric(3)}`);

      expect(resultOne).toBe(false);
      expect(resultTwo).toBe(false);
      expect(resultThree).toBe(false);
    });

    it('should return FALSE for empty string', () => {
      const result = hasOnlyNumbers('');

      expect(result).toBe(false);
    });
  });
});
