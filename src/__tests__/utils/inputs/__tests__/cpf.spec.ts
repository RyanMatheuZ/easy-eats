import { formatCPF, validateCPF } from '@utils/inputs/cpf';

describe('CPF utils function', () => {
  describe('To format', () => {
    it('should format a CPF string with dots and hyphen', () => {
      const result = formatCPF('90586636048');

      expect(result).toBe('905.866.360-48');
    });

    it('should limit number of digits to 11', () => {
      const result = formatCPF('5085269306000000000000');

      expect(result).toBe('508.526.930-60');
    });

    it('should format a CPF with extra characters', () => {
      const result = formatCPF('6a6b6c1d4e9g1r3t2yt9a8');

      expect(result).toBe('666.149.132-98');
    });
  });

  describe('To validate', () => {
    it.each`
    CPF
    ${'22683759002'}
    ${'90586636048'}
    ${'71848380097'}
    ${'32899160060'}
    ${'19036137284'}
    ${'50852693060'}
    ${'66614913298'}
    ${'49573073005'}
    ${'99766919046'}
    ${'82765973008'}
    ${'06278193205'}
  `(
      'should return TRUE for each valid CPF',
      ({ CPF }) => {
        const result = validateCPF(CPF);
        expect(result).toBe(true);
      }
    );

    it('should return FALSE if CPF length is not 11', () => {
      const result = validateCPF('99766919046325908029358');
      expect(result).toBe(false);
    });

    it.each`
    CPF
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
      'should return FALSE for each CPF with all numbers repeated (0-9)',
      ({ CPF }) => {
        const result = validateCPF(CPF);
        expect(result).toBe(false);
      }
    );
  });
});
