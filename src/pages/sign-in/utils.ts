import * as Yup from 'yup';

import { cnpj, password } from '@utils/schemas';

export interface SignInValues {
  cnpj: string;
  password: string;
}

export const signInInitialValues: SignInValues = {
  cnpj: '',
  password: ''
};

export const signInSchema = Yup.object().shape({
  cnpj,
  password
});
