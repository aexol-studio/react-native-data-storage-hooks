# React-native-data-storage-hooks

React-native-data-storage-hooks is a library based on AsyncStorage.

It provides hooks which enable setting single and multiple data of any type convertable to JSON to the async storage.

It also provides a method to get all the data from async storage at once, which can be used when your app starts.

# Getting started

$ npm install react-native-data-storage-hooks --save

$ react-native link react-native-data-storage-hooks

## Usage

```javascript
import {
  useGetFromStorage,
  useGetWholeStorage,
  useSetMultipleValues,
  useSetSingleValue,
  useDeleteFromStorage,
} from 'react-native-data-storage-hooks';

function App() {
  const [email, setEmail] = useSetSingleValue('email', 'example@email.com');
  const [storageValues] = useGetWholeStorage();
  const value = useGetFromStorage('name');
  const [values, setValues] = useSetMultipleValues([
    ['name', 'Anna'],
    ['data', {age: 20, profession: 'accountant'}],
  ]);
  const {deleteItem, clearAll} = useDeleteFromStorage();

  useEffect(() => {
    const storageOperations = async () => {
      deleteItem('name');
      clearAll();
    };
    storageOperations();
  }, []);

  return <View />;
}
```

## Keywords

react-native,
async-storage
