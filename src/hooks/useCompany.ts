import { useCallback } from 'react';

import axiosInstance from '@services/axios';

import { SignInValues } from '@pages/sign-in/utils';
import { SignUpValues } from '@pages/sign-up/utils';

const useCompany = () => {
  const endpoint = '/company';

  const handleSignIn = useCallback(async (data: SignInValues) => {
    try {
      const response = await axiosInstance.post(`${endpoint}/sign-in`, data);
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
    }
  }, []);


  const handleSignUp = useCallback(async (data: SignUpValues) => {
    try {
      const response = await axiosInstance.post(`${endpoint}/sign-up`, data);
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
    }
  }, []);


  return {
    handleSignIn,
    handleSignUp
  };
};

export default useCompany;
