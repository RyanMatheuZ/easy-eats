import { useCallback } from 'react';

import type { IRating } from '@ts/interfaces';

import axiosInstance from '@services/axios';

import { catchError } from '@utils/error';
import { success } from '@utils/success';

const useRateUs = () => {
  const ENDPOINT = '/rate-us';

  const handleSaveRating = useCallback(async (companyId: string, rating: IRating['howRatedUs']) => {
    const FORMATTED_ENDPOINT = `${ENDPOINT}/${companyId}`;

    try {
      const response = await axiosInstance.put(FORMATTED_ENDPOINT, {
        rating: {
          howRatedUs: rating
        }
      });
      success(response);
    } catch (e) {
      catchError(e);
    }
  }, []);

  return {
    handleSaveRating
  };
};

export default useRateUs;
