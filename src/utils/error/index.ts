import type { IAPIError } from '@ts/interfaces';

import { showToast } from '@utils/toast';

import { defaultErrorMessage } from './messages';

export const catchError = (catchError: unknown) => {
  const error = catchError as IAPIError;
  showToast(error.response?.data?.error || defaultErrorMessage, 'error');
};
