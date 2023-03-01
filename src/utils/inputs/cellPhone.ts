export const formatCellPhone = (cellPhone: string) => {
  return cellPhone
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};
