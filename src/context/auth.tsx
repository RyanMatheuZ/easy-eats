import type { FC, PropsWithChildren } from 'react';
import { useState, useContext, createContext } from 'react';

type AuthContextType = {
  company: any | null;
  handleSignIn: () => void;
  handleSignOut: () => void;
};


const authContextDefaultValues: AuthContextType = {
  company: null,
  handleSignIn: () => null,
  handleSignOut: () => null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

const AuthProviver: FC<PropsWithChildren> = ({ children }) => {
  const [company, setCompany] = useState(authContextDefaultValues.company);

  const handleSignIn = () => {
    setCompany(null);
  };

  const handleSignOut = () => {
    setCompany(null);
  };

  return (
    <AuthContext.Provider value={{ company, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProviver;
