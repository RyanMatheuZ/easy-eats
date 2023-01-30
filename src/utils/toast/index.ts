import { toast, TypeOptions } from 'react-toastify';

export const showToast = (message: string, type: TypeOptions) => {
  toast(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'light',
    type: type
  });
};
