import type { IAPIError } from '@ts/interfaces';

import { showToast } from '@utils/toast';

import { defaultSuccessMessage } from './messages';

export const success = (successResponse: unknown) => {
  const response = successResponse as IAPIError['response'];
  showToast(response?.data?.message || defaultSuccessMessage, 'success');
};
