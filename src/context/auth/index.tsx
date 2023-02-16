import type { FC, PropsWithChildren } from 'react';
import { useState, useContext, useCallback, createContext } from 'react';

import type { AxiosResponse } from 'axios';

import type { ICompany, IAuthContext, ISignIn, ISignUp } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { unauthenticatedRoutes } from './utils';

const authContextDefaultValues: IAuthContext = {
  company: null,
  unauthenticatedRoutes,
  handleSignIn: () => Promise.resolve(),
  handleSignUp: () => Promise.resolve(),
  handleSignOut: () => null,
};

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const [company, setCompany] = useState(authContextDefaultValues.company);

  const endpoint = '/auth/company';

  const handleSignIn = useCallback(async (signInValues: ISignIn) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${endpoint}/sign-in`, signInValues);
      setCompany(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSignUp = useCallback(async (signUpValues: ISignUp) => {
    try {
      const { data }: AxiosResponse<ICompany> = await axiosInstance.post(`${endpoint}/sign-up`, signUpValues);
      setCompany(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSignOut = () => {
    setCompany(null);
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
