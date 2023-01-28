export const hasOnlyNumbers = (value: string): boolean => {
  return !/^\d+$/.test(value);
};

export const formatCNPJ = (cnpj: string): string => {
  // 1. Removes any non-numeric characters
  // 2. Make sure it's 14 digits
  // 3. Add the dots and dashes
  return cnpj
    .replace(/\D/g, '')
    .slice(0, 14).
    replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const unformatCNPJ = (cnpj: string): string => {
  // Remove all non-digit characters (numbers from 0 to 9)
  return cnpj.replace(/[^\d]/g, '');
};

export const validateCNPJ = (cnpj: string): boolean => {
  // Applies calculation to validate a CNPJ
  // https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cnpj
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14) return false;

  let size = cnpj.length - 2,
    numbers = cnpj.substring(0, size),
    sum = 0,
    pos = size - 7;
  const digits = cnpj.substring(size);
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != Number(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result != Number(digits.charAt(1))) return false;

  return true;
};
