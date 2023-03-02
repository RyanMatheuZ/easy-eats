import { useRouter } from 'next/router';

import type { FC, PropsWithChildren } from 'react';
import { useState, useContext, useCallback, createContext } from 'react';

import type { AxiosResponse } from 'axios';

import type { ICompany, IAuthContext, ISignIn, ISignUp } from '@ts/interfaces';

import { useLocalStorage } from '@hooks/index';

import axiosInstance from '@services/axios';

import { showToast } from '@utils/toast';

import { authContextDefaultValues, unauthenticatedRoutes } from './utils';

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const { setStorageValue, getStorageValue, removeStorageValue } = useLocalStorage();

  const ENDPOINT = '/auth/company';

  const STORAGE_COMPANY_KEY = '@company_data';

  const storageCompanyInitialValue = getStorageValue(STORAGE_COMPANY_KEY);

  const [company, setCompany] = useState<IAuthContext['company']>(storageCompanyInitialValue);

  const handleStoreCompanyData = (key: string, company: ICompany) => {
    setCompany(company);
    setStorageValue(key, company);
  };

  const handleSignIn = useCallback(async (signInValues: ISignIn) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-in`, signInValues);
      handleStoreCompanyData(STORAGE_COMPANY_KEY, data);
      router.push('/admin');
      showToast('Empresa autenticada com sucesso!', 'success');
    } catch (error: any) {
      showToast(error.message, 'error');
    }
  }, []);

  const handleSignUp = useCallback(async (signUpValues: ISignUp) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${ENDPOINT}/sign-up`, signUpValues);
      handleStoreCompanyData(STORAGE_COMPANY_KEY, data);
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
      handleStoreCompanyData,
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
