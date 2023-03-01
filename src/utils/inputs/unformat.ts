export const unformat = (value: string): string => {
  // Remove all non-digit characters
  return value.replace(/[^\d]/g, '');
};
