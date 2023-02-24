import { useCallback } from 'react';

const useLocalStorage = () => {
  // https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
  const windowIsUndefined = typeof window === 'undefined';

  const setStorageValue = useCallback(<T>(key: string, value: T) => {
    if (windowIsUndefined) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getStorageValue = useCallback((key: string) => {
    if (windowIsUndefined) return;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }, []);

  const removeStorageValue = useCallback((key: string) => {
    if (windowIsUndefined) return;
    localStorage.removeItem(key);
  }, []);

  const clearStorageValue = useCallback(() => {
    if (windowIsUndefined) return;
    localStorage.clear();
  }, []);

  return {
    setStorageValue,
    getStorageValue,
    removeStorageValue,
    clearStorageValue
  };
};

export default useLocalStorage;
