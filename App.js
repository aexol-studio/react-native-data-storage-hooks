/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// API:
// 1. Przechowywanie pojedynczej wartości
// 2.

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import useSetSingleValue from './src/hooks/useSetSingleValue';
import useSetMultipleValues from './src/hooks/useSetMultipleValues.hook';

const App = () => {
  // const [name, setName] = useSetSingleValue('name', 'Bob');
  // const [email, setEmail] = useSetSingleValue('email', 'yajananrao@gmail.com');
  const [values, setValues] = useSetMultipleValues([
    ['imie', 'Ola'],
    ['nazwisko', 'MaKota'],
    ['wiek', 24],
  ]);
  useEffect(() => {
    const tryOut = async () => {
      await AsyncStorage.clear();
      setValues(
        ['imie', 'Alicja'],
        ['nazwisko', 'z krainy czarów'],
        ['wiek', 22],
      );
      console.log('Values', values);
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
