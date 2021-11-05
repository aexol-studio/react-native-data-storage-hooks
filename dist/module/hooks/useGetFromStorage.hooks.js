import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
export const useGetFromStorage = key => {
  const [value, setValue] = useState();
  useEffect(() => {
    const checkValue = async () => {
      const valueFromStorage = await AsyncStorage.getItem(key);

      if (valueFromStorage) {
        setValue(valueFromStorage);
      }
    };

    checkValue();
  }, [key]);
  return value;
};
//# sourceMappingURL=useGetFromStorage.hooks.js.map