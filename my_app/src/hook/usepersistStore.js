import { useState, useEffect } from 'react';

function usePersistStore(key, initialState) {
  const [store, setStore] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(store));
  }, [key, store]);
  return [store, setStore];
}

export default usePersistStore;
