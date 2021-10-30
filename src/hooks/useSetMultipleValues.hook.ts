import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const useSetMultipleValues = (keyValuePairs: Array<Array<string>>) => {
  const [storedValues, setStoredValues] = useState<string[][]>([]);
  console.log('keyValuePairs', keyValuePairs);
  console.log('storedValues', storedValues);

  useEffect(() => {
    setStoredValues(keyValuePairs);
    console.log('storedValues', storedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValues = async (newValues: Array<Array<string>>) => {
    console.log('Z set values', newValues);
    try {
      const valuesToStore =
        newValues instanceof Function ? newValues(newValues) : newValues;
      console.log('valuesToStore', valuesToStore, newValues);
      setStoredValues(valuesToStore);
      newValues.forEach(async el => {
        await AsyncStorage.setItem(el[0], JSON.stringify(el[1]));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValues, setValues];
};
export default useSetMultipleValues;

// export const setSingleKey = async (
//   key: string,
//   value: string | number | boolean | object,
// ) => {
//   try {
//     if (typeof value === 'string') {
//       await AsyncStorage.setItem(key, value);
//     } else {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem(key, jsonValue);
//     }
//   } catch (e) {
//     console.log('Error from setting single string', e);
//   }
// };

// export const getSingleKey = async (key: string) => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(key);
//     if (typeof jsonValue === 'string') {
//       return jsonValue != null ? jsonValue : null;
//     } else {
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     }
//   } catch (e) {
//     return 'Error from getSingleKey: ' + e;
//   }
// };

// export const removeSingleKey = async (key: string) => {
//   try {
//     await AsyncStorage.removeItem(key);
//     return `Item with key ${key} has been removed`;
//   } catch (e) {
//     return 'Item could not be removed. Error: ' + e;
//   }
// };

// export const getAllKeysInStorage = async () => {
//   let keys = [];
//   try {
//     keys = await AsyncStorage.getAllKeys();
//   } catch (e) {
//     return 'Read keys error: ' + e;
//   }
//   return keys;
// };

// export const getMultipleValues = async (keys: string[]) => {
//   let values;
//   try {
//     values = await AsyncStorage.multiGet(keys);
//     let newValues = AsyncStorage.multiSet();
//   } catch (e) {
//     return 'Error by getting multiple values: ' + e;
//   }
//   return values;
// };

// export const getMultipleValues = async (keys: string[]) => {
//   let values;
//   try {
//     if (!keys) {
//       return null;
//     } else {
//       keys.forEach(async k => {
//         let singleValue = await AsyncStorage.getItem(k);
//         let singleObject = {
//           key: k,
//           value: singleValue,
//         };
//         values.push(singleObject);
//       });
//     }
//   } catch (e) {
//     return 'Error by getting multiple values: ' + e;
//   }
//   return values;
// };

export const setMultipleValues = async (
  array: {key: string; value: string | number | boolean | Object}[],
) => {
  try {
    let newArray: {key: string; value: string}[] = [];
    array.forEach(el => {
      const jsonValue = JSON.stringify(el.value);
      let newElement = {
        key: el.key,
        value: jsonValue,
      };
      newArray.push(newElement);
    });
    if (newArray.length > 0) {
      newArray.forEach(async el => {
        await AsyncStorage.setItem(el.key, el.value);
      });
    }
  } catch (e) {
    console.log(e);
  }
};
