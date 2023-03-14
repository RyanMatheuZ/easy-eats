import { useEffect, useContext, useCallback, createContext, type FC, type PropsWithChildren } from 'react';

import { useRouter } from 'next/router';

import { type AxiosResponse } from 'axios';

import { type ICompany, type IAuthContext, type ISignIn, type ISignUp } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import useCompanyStore from '@services/zustand';

import { catchError } from '@utils/error';
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
      const { data }: AxiosResponse<{ company: ICompany }> = await axiosInstance.post(`${ENDPOINT}/sign-in`, {
        info: {
          cnpj: signInValues.cnpj
        },
        security: {
          password: signInValues.password
        }
      });
      handlePersistCompanyData(data.company);
      push('/admin');
      showToast('Empresa autenticada com sucesso!', 'success');
    } catch (e) {
      catchError(e);
    }
  }, []);

  const handleSignUp = useCallback(async (signUpValues: ISignUp) => {
    try {
      const { data }: AxiosResponse<{ company: ICompany }> = await axiosInstance.post(`${ENDPOINT}/sign-up`, {
        info: {
          fantasyName: signUpValues.fantasyName,
          cnpj: signUpValues.cnpj,
          email: signUpValues.email
        },
        security: {
          password: signUpValues.password,
          confirmPassword: signUpValues.confirmPassword
        }
      });
      handlePersistCompanyData(data.company);
      push('/admin');
      showToast('Empresa cadastrada com sucesso!', 'success');
    } catch (e) {
      catchError(e);
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
