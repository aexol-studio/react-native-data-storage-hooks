/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useGetWholeStorage = () => {
  const [values, setValues] = useState<any[][]>();
  const [refresh, _setRefresh] = useState<boolean>(false);

  const refreshValues: () => void = () => {
    _setRefresh(!refresh);
  };

  useEffect(() => {
    const checkStorage = async () => {
      let asyncValues: any[][] = [];
      const asyncKeys = await AsyncStorage.getAllKeys();
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

  return [values, refreshValues] as const;
};
