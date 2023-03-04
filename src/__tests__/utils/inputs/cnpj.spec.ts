import { formatCNPJ, validateCNPJ } from '@utils/inputs/cnpj';

describe('CNPJ utils function', () => {
  describe('To format', () => {
    test('should format CNPJ correctly', () => {
      const result = formatCNPJ('12345678901234');
      expect(result).toBe('12.345.678/9012-34');
    });

    test('should remove non-numeric characters from CNPJ', () => {
      const result = formatCNPJ('12a3.b45/c6d78e9012-34');
      expect(result).toBe('12.345.678/9012-34');
    });

    test('should truncate CNPJ to 14 digits', () => {
      const result = formatCNPJ('12345678901234567890');
      expect(result).toBe('12.345.678/9012-34');
    });
  });

  describe('To validate', () => {
    it.each([
      { cnpj: '05596908000123' },
      { cnpj: '12520608000126' },
      { cnpj: '27767644000166' },
      { cnpj: '36475006000162' },
      { cnpj: '46294266000195' },
      { cnpj: '59162643000184' },
      { cnpj: '62599333000136' },
      { cnpj: '72806528000163' },
      { cnpj: '89071787000196' },
      { cnpj: '98114532000154' },
    ])('should return TRUE for each valid CNPJ', async ({ cnpj }) => {
      const result = validateCNPJ(cnpj);
      expect(result).toBe(true);
    });

    it('should return FALSE if CNPJ length is not 14', () => {
      const result = validateCNPJ('11.444.777/0001-6');
      expect(result).toBe(false);
    });

    it.each([
      { cnpj: '00000000000000' },
      { cnpj: '11111111111111' },
      { cnpj: '22222222222222' },
      { cnpj: '33333333333333' },
      { cnpj: '44444444444444' },
      { cnpj: '55555555555555' },
      { cnpj: '66666666666666' },
      { cnpj: '77777777777777' },
      { cnpj: '88888888888888' },
      { cnpj: '99999999999999' }
    ])('should return FALSE for each CNPJ with all numbers repeated (0-9)', async ({ cnpj }) => {
      const result = validateCNPJ(cnpj);
      expect(result).toBe(false);
    });
  });
});
