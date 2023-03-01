import type { TErrors } from '@ts/types';

interface IAPIError {
  message: string;
  type: TErrors;
  displayMessage: string;
  context: {
    key: string;
    value: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  stack: string;
}

export default IAPIError;
