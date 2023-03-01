import * as Yup from 'yup';

import type { ISignUp } from '@ts/interfaces';

import { fantasyName, cnpj, password, confirmPassword } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';

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
