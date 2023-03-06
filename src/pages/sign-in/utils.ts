import * as Yup from 'yup';

import type { ISignIn } from '@ts/interfaces';

import { cnpj, password } from '@utils/validationSchemas/company';

export const head = {
  title: 'Entrar',
  description: 'Bem-vindo(a)! Aqui você pode acessar todas as funcionalidades do nosso sistema. Para fazer login, insira o CNPJ da empresa e senha nos campos correspondentes e clique no botão "ENTRAR". Lembre-se de que todas as informações fornecidas são protegidas por nossa política de privacidade e serão mantidas em sigilo. Obrigado por escolher nosso sistema de gerenciamento de empresas!'
};

export const signInInitialValues: ISignIn = {
  cnpj: '',
  password: ''
};

export const signInSchema = Yup.object().shape({
  cnpj,
  password
});
