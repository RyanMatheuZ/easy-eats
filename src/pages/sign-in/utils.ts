import * as Yup from 'yup';

import type { ISignIn } from '@ts/interfaces';

import { cnpj, password } from '@utils/validationSchemas/company';

export const signInInitialValues: ISignIn = {
  cnpj: '',
  password: ''
};

export const signInSchema = Yup.object().shape({
  cnpj,
  password
});
