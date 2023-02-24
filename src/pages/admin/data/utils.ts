import * as Yup from 'yup';

import { fantasyName, cnpj, email } from '@utils/schemas';

export const states = [
  'AC', 'AL', 'AP',
  'AM', 'BA', 'CE',
  'DF', 'ES', 'GO',
  'MA', 'MT', 'MS',
  'MG', 'PA', 'PB',
  'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS',
  'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
];

export const adminDataSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email
});
