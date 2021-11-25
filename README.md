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

### `useSetSingleValue`


useSetSingleValue hook decleres the key name for the single value that needs to be set to Async Storage and provides a method to set it.
It takes two arguments, the first one is a key that will be set to Async Storage and the second one is a value.
Value won't be saved to Async Storage until the setValue method is used.

```js
import { useSetSingleValue } from 'react-native-data-storage-hooks'

function App() {
  const [email, setEmail] = useSetSingleValue('email', '');

  useEffect(() => {
    setEmail('email@email.com');
  }, []);

  useEffect(() => {
    console.log(email); // 'email@email.com'
  }, [email]);
```

### `useSetMultipleValues`


useSetMultipleValues hook can set many values at once to the Async Storage.
As an argument pass an array of arrays, where the first element is a key (type string is required)
and the second element is a value that should be set with this key.

```js
import { useSetMultipleValues } from 'react-native-data-storage-hooks'

function App() {
  const [values, setValues] = useSetMultipleValues([]);

  useEffect(() => {
    setMultipleValues([['name', 'Adam'], ['age', 44]]);
  }, []);

  useEffect(() => {
    console.log(multipleValues);
  }, [multipleValues]);
```
### `useGetFromStorage`


useGetFromStorage hook returns a value of a single element set to Async Storage.
As an argument pass the key of the element in Async Storage.

```js
import { useGetFromStorage } from 'react-native-data-storage-hooks'

function App() {
  const value = useGetFromStorage('name');

  useEffect(() => {
    console.log(value);
  }, [value]);
```

### `useGetWholeStorage`


useGetWholeStorage hook returns all values in the Async Storage and the method to refresh the Async Storage values if needed.

```js
import { useGetWholeStorage } from 'react-native-data-storage-hooks'

function App() {
  const [storageValues, refresh] = useGetWholeStorage();

  useEffect(() => {
    console.log(storageValues);
  }, [storageValues]);
```
### `useDeleteFromStorage`


useDeleteFromStorage hook returns two methods: 
- deleteItem - it takes the key as an argument and removes that value from Async Storage,
- clearAll - cleares the whole storage,

```js
import { useDeleteFromStorage } from 'react-native-data-storage-hooks'

function App() {
  const { deleteItem, clearAll } = useDeleteFromStorage();

  //deleteItem test:
  useEffect(() => {
    deleteItem('name');
  }, []);
  
  useEffect(() => {
    console.log('All', storageValues);
  }, [storageValues]); 

  // clearAll test:
  useEffect(() => {
    clearAll();
  }, []);

  useEffect(() => {
    console.log('All', storageValues);
  }, [storageValues]);

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
