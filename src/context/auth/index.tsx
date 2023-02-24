import { useRouter } from 'next/router';

import { FC, PropsWithChildren } from 'react';
import { useState, useContext, useCallback, createContext } from 'react';

import type { AxiosResponse } from 'axios';

import type { ICompany, IAuthContext, ISignIn, ISignUp } from '@ts/interfaces';

import useLocalStorage from '@hooks/useLocalStorage';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const { setStorageValue, getStorageValue, removeStorageValue } = useLocalStorage();

  const STORAGE_COMPANY_KEY = '@company_data';

  const ENDPOINT = '/auth/company';

  const storageCompanyInitialValue = getStorageValue(STORAGE_COMPANY_KEY);

  const [company, setCompany] = useState<IAuthContext['company']>(storageCompanyInitialValue);

  const handleStoreCompanyData = (company: ICompany) => {
    setCompany(company);
    setStorageValue(STORAGE_COMPANY_KEY, company);
  };

  const handleSignIn = useCallback(async (signInValues: ISignIn) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-in`, signInValues);
      handleStoreCompanyData(data);
      router.push('/admin');
      showToast('Empresa autenticada com sucesso!', 'success');
    } catch (error: any) {
      showToast(error.message, 'error');
    }
  }, []);

  const handleSignUp = useCallback(async (signUpValues: ISignUp) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-up`, signUpValues);
      handleStoreCompanyData(data);
      router.push('/admin');
      showToast('Empresa cadastrada com sucesso!', 'success');
    } catch (error: any) {
      showToast(error.message, 'error');
    }
  }, []);

  const handleSignOut = () => {
    router.push('/welcome');
    setCompany(null);
    removeStorageValue(STORAGE_COMPANY_KEY);
  };

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
