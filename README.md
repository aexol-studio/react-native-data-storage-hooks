# React-native-data-storage-hooks

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/react-native-data-storage-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-native-data-storage-hooks)

React-native-data-storage-hooks is a library based on AsyncStorage designed for React Native with Type Script.

It provides hooks which enable setting single and multiple data of any type convertable to JSON to the async storage.

It also provides a method to get all the data from async storage at once, which can be used when your app starts.

# Getting started

Before the installation make sure that you have the @react-native-async-storage/async-storage library installed in your project. 

```bash
  npm install react-native-data-storage-hooks --save
  cd ios
  pod install
```

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
  const [email, setEmail] = useSetSingleValue('email', '');
  const [storageValues, refresh] = useGetWholeStorage();
  const value = useGetFromStorage('name');
  const [multipleValues, setMultipleValues] = useSetMultipleValues([]);
  const {deleteItem, clearAll} = useDeleteFromStorage();

  useEffect(() => {
    const storageOperations = async () => {
      setEmail('email@email.com');
      setMultipleValues([
        ['name', 'Alicia'],
        ['data', {age: 25, profession: 'accountant'}]
      ])
      console.log(multipleValues); // [['name', 'Alicia'],['data', {age: 25, profession: 'accountant'}]]
      console.log(storageValues); // returns the whole storage:
      // [['email', 'email@email.com'], ['name', 'Alicia'],['data', {age: 25, profession: 'accountant'}]]
      deleteItem('name');
      console.log(storageValues); // returns the whole storage:
      // [['email', 'email@email.com'], ['name', 'Alicia'],['data', {profession: 'accountant'}]]
      clearAll();
      console.log(storageValues); // []
    };
    storageOperations();
  }, []);

  return (...);
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
