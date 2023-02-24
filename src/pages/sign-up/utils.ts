import * as Yup from 'yup';

import type { ISignUp } from '@ts/interfaces';

import { fantasyName, cnpj, email, password, confirmPassword } from '@utils/schemas';

export const signUpInitialValues: ISignUp = {
  fantasyName: '',
  cnpj: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const signUpSchema = Yup.object().shape({
  fantasyName,
  cnpj,
  email,
  password,
  confirmPassword
});
