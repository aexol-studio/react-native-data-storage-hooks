/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useDeleteFromStorage = () => {
  const deleteItem = async (key: string) => {
    await AsyncStorage.removeItem(key);
    console.log(`Item with the key ${key} has been removed`);
  };
  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log('Async storage has been cleared.');
  };

  return {deleteItem, clearAll};
};
