import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import {useGetWholeStorage} from './index';

export const useSetSingleValue = (
  key: string,
  initialValue: string | number | object | Array<any>,
) => {
  const [storedValue, setStoredValue] = useState();
  const [, refreshValues] = useGetWholeStorage();

  async function getStoredItem() {
    try {
      refreshValues();
      if (
        key === '' ||
        key === undefined ||
        initialValue === null ||
        initialValue === undefined
      ) {
        return;
      }
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStoredItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = async (value: string | number | object | Array<any>) => {
    try {
      if (value === null || value === undefined) {
        return;
      }
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      const valueFromStorage = await AsyncStorage.getItem(key);
      if (valueFromStorage) {
        setStoredValue(JSON.parse(valueFromStorage));
      } else {
        console.error('Value could not be set to async storage');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
