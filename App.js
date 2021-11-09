import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSetSingleValue} from './src/hooks/useSetSingleValue.hook';
import {useSetMultipleValues} from './src/hooks/useSetMultipleValues.hook';
import {useGetWholeStorage} from './src/hooks/useGetWholeStorage.hooks';
import {useDeleteFromStorage} from './src/hooks/useDeleteFromStorage.hooks/';

const App = () => {
  const [value, setValue] = useSetSingleValue('name', 'ala');
  const [values, setValues] = useSetMultipleValues([
    ['age', 30],
    ['color', 'orange'],
    ['data', {sex: 'female', isInTheTeam: false}],
  ]);
  const [storageValues] = useGetWholeStorage();
  const {deleteItem, clearAll} = useDeleteFromStorage();
  useEffect(() => {
    const tryOut = async () => {
      //   setValues([
      //     ['age', 20],
      //     ['color', 'blue'],
      //     ['data', {sex: 'female', isInTheTeam: true}],
      //   ]);
      clearAll();
      console.log('Storage values', storageValues);
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
