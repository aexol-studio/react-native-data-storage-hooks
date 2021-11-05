import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
export const useGetWholeStorage = () => {
  const [values, setValues] = useState();
  const [refresh, _setRefresh] = useState(false);

  const refreshValues = () => {
    _setRefresh(!refresh);
  };

  useEffect(() => {
    const checkStorage = async () => {
      let asyncValues = [];
      const asyncKeys = await AsyncStorage.getAllKeys();

      if (asyncKeys.length > 0) {
        asyncKeys.forEach(async el => {
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
  return [values, refreshValues];
};
//# sourceMappingURL=useGetWholeStorage.hooks.js.map