# React-native-data-storage-hooks

React-native-data-storage-hooks is a library based on AsyncStorage designed for React Native with Type Script.

It provides hooks which enable setting single and multiple data of any type convertable to JSON to the async storage.

It also provides a method to get all the data from async storage at once, which can be used when your app starts.

# Getting started

$ npm install react-native-data-storage-hooks --save

For ios go to the ios folder and use pod install

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
  const [storageValues, refresh] = useGetWholeStorage();
  const value = useGetFromStorage('name');
  const [multipleValues, setMultipleValues] = useSetMultipleValues([
    ['name', 'Anna'],
    ['data', {age: 20, profession: 'accountant'}]
  ]);
  const {deleteItem, clearAll} = useDeleteFromStorage();

  useEffect(() => {
    const storageOperations = async () => {
      console.log(email); // example@email.com
      setEmail('anotherExample@email.com');
      console.log(email); // anotherExample@email.com
      console.log(multipleValues); // [['name', 'Anna'],['data', {age: 20, profession: 'accountant'}]]
      setMultipleValues([
        ['name', 'Alicia'],
        ['data', {age: 25, profession: 'taxi driver'}]
      ])
      console.log(multipleValues); // [['name', 'Alicia'],['data', {age: 25, profession: 'taxi driver'}]]
      console.log(storageValues); // returns the whole storage:
      // [['email', 'anotherExample@email.com'], ['name', 'Alicia'],['data', {age: 25, profession: 'taxi driver'}]]
      deleteItem('name');
      console.log(storageValues); // returns the whole storage:
      // [['email', 'anotherExample@email.com'], ['name', 'Alicia'],['data', {profession: 'taxi driver'}]]
      clearAll();
      console.log(storageValues); // []
    };
    storageOperations();
  }, []);

  return <View />;
}
```

## Before installation

React-native-data-storage-hooks is designed for React Native CLI with Type Script.
Please make sure that your MetroJS bundler compiles .ts and .tsx files.
To check that go to your metro.config.js file in root project folder and add the required source extensions to the resolver:

```java script
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], //add here
  },
};
```

## Keywords

react-native,
async-storage
