import type { TErrors } from '@ts/types';

interface IAPIError {
  message: string;
  type: TErrors;
  displayMessage: string;
  context: {
    key: string;
    value: string;
  };
  data: any;
  stack: string;
}

export default IAPIError;
