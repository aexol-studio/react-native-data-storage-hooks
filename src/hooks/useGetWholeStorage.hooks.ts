/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useGetWholeStorage = () => {
  const [values, setValues] = useState<any[][]>();
  const [refresh, _setRefresh] = useState<boolean>(false);
  const [storage, setStorage] = useState({});

  const refreshValues: () => void = () => {
    _setRefresh(!refresh);
  };

  useEffect(() => {
    const checkStorage = async () => {
      let asyncValues: any[][] = [];
      const asyncKeys = await AsyncStorage.getAllKeys();
      let STORAGE: any = {};
      for (const key of asyncKeys) {
        STORAGE[key] = `${key}`;
      }
      setStorage(STORAGE);
      global.STORAGE = STORAGE;
      if (asyncKeys.length > 0) {
        asyncKeys.forEach(async (el: string) => {
          const valueFromAsync = await AsyncStorage.getItem(el);
          if (valueFromAsync) {
            let newArray = [el, JSON.parse(valueFromAsync)];
            asyncValues.push(newArray);
          }
          setValues(asyncValues);
        });
      }
    };
    checkStorage();
  }, [refresh]);

  return [values, refreshValues, storage] as const;
};
