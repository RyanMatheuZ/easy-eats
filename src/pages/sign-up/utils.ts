import * as Yup from 'yup';

import type { ISignUp } from '@ts/interfaces';

import { fantasyName, cnpj, password, confirmPassword } from '@utils/validationSchemas/company';
import { email } from '@utils/validationSchemas/contacts';

export const head = {
  title: 'Cadastrar-se',
  description: 'Bem-vindo(a)! Aqui você pode criar uma conta para acessar todas as funcionalidades do nosso sistema. Para criar uma nova conta, preencha o formulário de cadastro com suas informações básicas. Certifique-se de preencher todos os campos antes de clicar no botão "CADASTRAR-SE". Caso já tenha uma conta, basta clicar no link "Já possui uma conta?" no topo da página para acessar o sistema.'
};

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
