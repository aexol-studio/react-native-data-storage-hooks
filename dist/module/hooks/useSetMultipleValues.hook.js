import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useGetWholeStorage } from './index';
export const useSetMultipleValues = keyValuePairs => {
  const [storedValues, setStoredValues] = useState([]);
  const [, refreshValues] = useGetWholeStorage();
  useEffect(() => {
    setStoredValues(keyValuePairs); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValues = newValues => {
    try {
      refreshValues();
      const valuesToStore = newValues instanceof Function ? newValues(storedValues) : newValues;
      setStoredValues(valuesToStore);

      if (valuesToStore.length > 0) {
        valuesToStore.forEach(async el => {
          if (el.length > 0 && typeof el[0] === 'string') {
            await AsyncStorage.setItem(el[0], JSON.stringify(el[1]));
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValues, setValues];
};
//# sourceMappingURL=useSetMultipleValues.hook.js.map