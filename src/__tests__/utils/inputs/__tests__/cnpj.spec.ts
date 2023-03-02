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
    it.each`
    CNPJ
    ${'89714788000101'}
    ${'60684233000182'}
    ${'75546227000136'}
    ${'78158976000184'}
    ${'40228123000107'}
    ${'83906266000125'}
    ${'93077871000194'}
    ${'64765349000105'}
    ${'21773903000185'}
    ${'72847305000144'}
    ${'44062240000196'}
  `(
      'should return TRUE for each valid CNPJ',
      ({ CNPJ }) => {
        const result = validateCNPJ(CNPJ);
        expect(result).toBe(true);
      }
    );

    it('should return FALSE if CNPJ length is not 14', () => {
      const result = validateCNPJ('11.444.777/0001-6');
      expect(result).toBe(false);
    });

    it.each`
    CNPJ
    ${'00000000000000'}
    ${'11111111111111'}
    ${'22222222222222'}
    ${'33333333333333'}
    ${'44444444444444'}
    ${'55555555555555'}
    ${'66666666666666'}
    ${'77777777777777'}
    ${'88888888888888'}
    ${'99999999999999'}
  `(
      'should return FALSE for each CNPJ with all numbers repeated (0-9)',
      ({ CNPJ }) => {
        const result = validateCNPJ(CNPJ);
        expect(result).toBe(false);
      }
    );
  });
});
