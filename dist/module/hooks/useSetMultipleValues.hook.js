import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useGetWholeStorage } from './index';
export const useSetMultipleValues = () => {
  const [storedValues, setStoredValues] = useState([]);
  const [, refreshValues] = useGetWholeStorage();

  const setValues = newValues => {
    try {
      refreshValues();
      const valuesToStore = newValues instanceof Function ? newValues(storedValues) : newValues;
      setStoredValues(valuesToStore);

      if (newValues.length > 0) {
        newValues.forEach(async el => {
          if (el.length > 0 && typeof el[0] === 'string') {
            await AsyncStorage.setItem(el[0], JSON.stringify(el[1]));
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValues, setValues];
};
//# sourceMappingURL=useSetMultipleValues.hook.js.map