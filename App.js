/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSetSingleValue} from './src/hooks/useSetSingleValue.hook';
import {useSetMultipleValues} from './src/hooks/useSetMultipleValues.hook';
import {useGetWholeStorage} from './src/hooks/useGetWholeStorage.hooks';
import {useGetFromStorage} from './src/hooks/useGetFromStorage.hooks';

const App = () => {
  // const [name, setName] = useSetSingleValue('name', 'Bob');
  const [email, setEmail] = useSetSingleValue('email', 'yajananrao@gmail.com');
  const [values, setValues] = useSetMultipleValues([
    ['imie', 'Ola'],
    ['nazwisko', 'Makota'],
  ]);
  const [valuesFromStorage] = useGetWholeStorage();
  useEffect(() => {
    const tryOut = async () => {
      console.log('global: ', global.STORAGE);
    };
    tryOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Test app</Text>
    </View>
  );
};

export default App;
