import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useGetWholeStorage} from './index';

export const useSetMultipleValues = () => {
  const [storedValues, setStoredValues] = useState<
    [string, string | number | object | Array<any>][]
  >([]);
  const [, refreshValues] = useGetWholeStorage();

  const setValues = (
    newValues: [string, string | number | object | Array<any>][],
  ) => {
    try {
      refreshValues();
      const valuesToStore =
        newValues instanceof Function ? newValues(storedValues) : newValues;
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
