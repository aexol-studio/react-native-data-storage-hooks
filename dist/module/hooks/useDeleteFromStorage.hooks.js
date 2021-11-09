import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetWholeStorage } from './index';
export const useDeleteFromStorage = () => {
  const [, refreshValues] = useGetWholeStorage();

  const deleteItem = async key => {
    await AsyncStorage.removeItem(key);
    refreshValues();
  };

  const clearAll = async () => {
    await AsyncStorage.clear();
    refreshValues();
  };

  return {
    deleteItem,
    clearAll
  };
};
//# sourceMappingURL=useDeleteFromStorage.hooks.js.map