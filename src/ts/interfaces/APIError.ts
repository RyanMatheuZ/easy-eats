import type { TErrors } from '@ts/types';

interface IAPIError {
  message?: string;
  type?: TErrors;
  displayMessage?: string;
  response?: {
    data?: {
      error?: string;
      message?: string;
    }
  }
}

export default IAPIError;
