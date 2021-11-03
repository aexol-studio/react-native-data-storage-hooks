/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useGetFromStorage = (key: string) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    const checkValue = async () => {
      const valueFromStorage = await AsyncStorage.getItem(key);
      if (valueFromStorage) {
        setValue(valueFromStorage);
      }
      console.log('value to the key', valueFromStorage);
    };
    checkValue();
  }, [key]);

  return value;
};
