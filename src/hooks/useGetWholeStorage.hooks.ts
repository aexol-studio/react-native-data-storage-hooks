import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
export const useGetWholeStorage = () => {
  const [values, setValues] = useState<any[][]>();
  const [refresh, _setRefresh] = useState<boolean>(false);
  const refreshValues: () => void = () => {
    _setRefresh(!refresh);
  };
  const getAllAsyncStorageValues = async (asyncKeys: string[]) => {
    const storageValues: any[][] = [];
    for (const el of asyncKeys) {
      const valueFromAsync = await AsyncStorage.getItem(el);
      if (valueFromAsync) {
        let newArray = [el, JSON.parse(valueFromAsync)];
        storageValues.push(newArray);
      }
    }
    return new Promise<any[][]>(resolve => resolve(storageValues));
  };
  useEffect(() => {
    const checkStorage = async () => {
      const asyncKeys = await AsyncStorage.getAllKeys();
      if (asyncKeys.length > 0) {
        const asyncValues = await getAllAsyncStorageValues(asyncKeys);
        setValues(asyncValues);
      }
    };
    checkStorage();
  }, [refresh]);
  return [values, refreshValues] as const;
};
