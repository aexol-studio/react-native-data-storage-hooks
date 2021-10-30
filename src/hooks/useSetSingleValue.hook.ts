import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const useSetSingleValue = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState();

  async function getStoredItem() {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      //   if (!item) {
      //     await AsyncStorage.setItem(key, JSON.stringify(initialValue));
      //   }
      setStoredValue(value);
    } catch (error) {
      // If error also return initialValue
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = async (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
export default useSetSingleValue;
