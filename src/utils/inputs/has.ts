export const hasOnlyNumbers = (value: string): boolean => {
  return /^\d+$/.test(value);
};
