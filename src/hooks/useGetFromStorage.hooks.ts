import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useGetFromStorage = (key: string) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    const checkValue = async () => {
      const valueFromStorage = await AsyncStorage.getItem(key);
      if (valueFromStorage !== null) {
        setValue(JSON.parse(valueFromStorage));
      } else {
        setValue(null);
      }
    };
    checkValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};
