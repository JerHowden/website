'use client';

import { useEffect, useState } from 'react';

type StorageDict = {
  palette: 'dark' | 'light';
};

type StorageKeys = keyof StorageDict;

export const useLocalStorage = (key: StorageKeys) => {
  const [storage, _setStorage] = useState<StorageDict[typeof key]>();
  useEffect(() => {
    function handleStorage() {
      _setStorage(JSON.parse(localStorage.getItem(key) ?? '{}'));
    }

    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  const setStorage = (data: StorageDict[typeof key]) => {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  };
  const arr: [typeof storage, typeof setStorage] = [storage, setStorage];
  return arr;
};
