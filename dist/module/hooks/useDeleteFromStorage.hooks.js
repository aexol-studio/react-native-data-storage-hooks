import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetWholeStorage } from './index';
export const useDeleteFromStorage = () => {
  const [, refreshValues] = useGetWholeStorage();

  const deleteItem = async key => {
    await AsyncStorage.removeItem(key);
    console.log(`Item with the key ${key} has been removed`);
    refreshValues();
  };

  const clearAll = async () => {
    await AsyncStorage.clear();
    console.log('Async storage has been cleared.');
    refreshValues();
  };

  return {
    deleteItem,
    clearAll
  };
};
//# sourceMappingURL=useDeleteFromStorage.hooks.js.map