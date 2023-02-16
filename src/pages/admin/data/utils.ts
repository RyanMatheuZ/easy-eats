import * as Yup from 'yup';

import { fantasyName, cnpj, email } from '@utils/schemas';

export const adminDataSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email
});
