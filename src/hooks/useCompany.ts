import { useCallback } from 'react';

import axiosInstance from '@services/axios';

import type { ISignIn, ISignUp } from 'types';

const useCompany = () => {
  const endpoint = '/company';

  const handleSignIn = useCallback(async (data: ISignIn) => {
    try {
      const response = await axiosInstance.post(`${endpoint}/sign-in`, data);
      return Promise.resolve(response);
    } catch (error) {
      console.error(error);
    }
  }, []);


  const handleSignUp = useCallback(async (data: ISignUp) => {
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
