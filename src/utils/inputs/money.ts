export const formatMoney = (monetaryValue: number) => {
  const cleanValue = Number(String(monetaryValue).replace(/[^\w\s]/g, ''));

  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const decimalPlace = Number(cleanValue.toFixed(2).split('.')[1]);

  const formattedTypingValue = moneyFormatter.format(Number(cleanValue) / 100);
  const formattedExistingValue = decimalPlace !== 0 ? monetaryValue * 10 : monetaryValue * 100;
  const numericValue = decimalPlace !== 0 ? cleanValue / 10 : cleanValue / 100;

  return {
    formattedTypingValue,
    formattedExistingValue,
    numericValue
  };
};
