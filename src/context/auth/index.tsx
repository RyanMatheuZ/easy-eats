import { useRouter } from 'next/router';

import type { FC, PropsWithChildren } from 'react';
import { useEffect, useContext, useCallback, createContext } from 'react';

import type { AxiosResponse } from 'axios';

import type { ICompany, IAuthContext, ISignIn, ISignUp } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import useCompanyStore from '@services/zustand';

import { showToast } from '@utils/toast';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const { push, replace, asPath } = useRouter();

  const [company, handlePersistCompanyData, handleCleanCompanyData] = useCompanyStore(
    (state) => [state.company, state.handlePersistCompanyData, state.handleCleanCompanyData]
  );

  const isCompanyDataPersisted = !!company;
  const isAuthenticatedCompany = isCompanyDataPersisted && !!unauthenticatedRoutes.includes(asPath);

  const ENDPOINT = '/auth/company';

  const handleSignIn = useCallback(async (signInValues: ISignIn) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-in`, signInValues);
      handlePersistCompanyData(data);
      push('/admin');
      showToast('Empresa autenticada com sucesso!', 'success');
    } catch {
      const errorMessage = 'Não foi possível a autenticação. Tente novamente mais tarde!';
      showToast(errorMessage, 'error');
    }
  }, []);

  const handleSignUp = useCallback(async (signUpValues: ISignUp) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-up`, signUpValues);
      handlePersistCompanyData(data);
      push('/admin');
      showToast('Empresa cadastrada com sucesso!', 'success');
    } catch {
      const errorMessage = 'Não foi possível o cadastro. Tente novamente mais tarde!';
      showToast(errorMessage, 'error');
    }
  }, []);

  const handleSignOut = () => {
    push('/welcome');
    handleCleanCompanyData();
  };

  useEffect(() => {
    if (isCompanyDataPersisted || isAuthenticatedCompany) {
      push('/admin');
    } else {
      replace('/welcome');
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      company,
      unauthenticatedRoutes,
      handleSignIn,
      handleSignUp,
      handleSignOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProviver;
