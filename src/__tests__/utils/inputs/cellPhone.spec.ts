import { formatCellPhone } from '@utils/inputs/cellPhone';

describe('Cell phone utils function', () => {
  describe('To format', () => {
    it('should return the cell phone number correctly formatted', () => {
      const result = formatCellPhone('51951575049');

      expect(result).toBe('(51) 95157-5049');
    });

    it('should limit number of digits to 11', () => {
      const result = formatCellPhone('1698765432100000');

      expect(result).toBe('(16) 98765-4321');
    });

    it('should remove any non-numeric characters', () => {
      const result = formatCellPhone('123!@#$%&*()-');

      expect(result).toBe('123');
    });
  });
});
