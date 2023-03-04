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
    it.each([
      { cpf: '06278193205' },
      { cpf: '19036137284' },
      { cpf: '22683759002' },
      { cpf: '32899160060' },
      { cpf: '49573073005' },
      { cpf: '50852693060' },
      { cpf: '66614913298' },
      { cpf: '71848380097' },
      { cpf: '82765973008' },
      { cpf: '90586636048' },
    ])('should return TRUE for each valid CPF', async ({ cpf }) => {
      const result = validateCPF(cpf);
      expect(result).toBe(true);
    });

    it('should return FALSE if CPF length is not 11', () => {
      const result = validateCPF('99766919046325908029358');
      expect(result).toBe(false);
    });

    it.each([
      { cpf: '00000000000000' },
      { cpf: '11111111111111' },
      { cpf: '22222222222222' },
      { cpf: '33333333333333' },
      { cpf: '44444444444444' },
      { cpf: '55555555555555' },
      { cpf: '66666666666666' },
      { cpf: '77777777777777' },
      { cpf: '88888888888888' },
      { cpf: '99999999999999' }
    ])('should return FALSE for each CPF with all numbers repeated (0-9)', async ({ cpf }) => {
      const result = validateCPF(cpf);
      expect(result).toBe(false);
    });
  });
});
