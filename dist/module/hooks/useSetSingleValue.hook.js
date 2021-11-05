import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useGetWholeStorage } from './index';
export const useSetSingleValue = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState();
  const [, refreshValues] = useGetWholeStorage();

  async function getStoredItem() {
    try {
      refreshValues();
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = async value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
//# sourceMappingURL=useSetSingleValue.hook.js.map