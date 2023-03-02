import { formatCEP } from '@utils/inputs/cep';

describe('CEP utils function', () => {
  describe('To format', () => {
    it('should return the CEP correctly formatted', () => {
      const result = formatCEP('12345678');

      expect(result).toBe('12345-678');
    });

    it('should limit number of digits to 8', () => {
      const result = formatCEP('123456789');

      expect(result).toBe('12345-678');
    });

    it('should format a CEP with extra characters', () => {
      const result = formatCEP('12a34b567c8d');

      expect(result).toBe('12345-678');
    });

    it('should not format an invalid CEP', () => {
      const result = formatCEP('1234');

      expect(result).toBe('1234');
    });
  });
});
