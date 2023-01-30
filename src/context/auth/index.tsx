import type { FC, PropsWithChildren } from 'react';

import { useState, useContext, createContext } from 'react';

import type { ICompany, IAuthContext } from 'types';

import { authenticatedRoutes, unauthenticatedRoutes } from './utils';

const authContextDefaultValues: IAuthContext = {
  company: null,
  authenticatedRoutes,
  unauthenticatedRoutes,
  handleSignIn: () => null,
  handleSignOut: () => null,
};

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const [company, setCompany] = useState(authContextDefaultValues.company);

  const handleSignIn = (company: ICompany) => {
    setCompany(company);
  };

  const handleSignOut = () => {
    setCompany(null);
  };

  return (
    <AuthContext.Provider value={{
      company,
      authenticatedRoutes,
      unauthenticatedRoutes,
      handleSignIn,
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
