/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import {useGetWholeStorage} from './index';

export const useSetMultipleValues = (
  keyValuePairs: [string, string | number | object | Array<any>][],
) => {
  const [storedValues, setStoredValues] = useState<
    [string, string | number | object | Array<any>][]
  >([]);
  const [, refreshValues] = useGetWholeStorage();

  useEffect(() => {
    setStoredValues(keyValuePairs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
