import {useGetFromStorage} from './src/hooks/useGetFromStorage.hooks';
import {useGetWholeStorage} from './src/hooks/useGetWholeStorage.hooks';
import {useSetMultipleValues} from './src/hooks/useSetMultipleValues.hook';
import {useSetSingleValue} from './src/hooks/useSetSingleValue.hook';
import {useDeleteFromStorage} from './src/hooks/useDeleteFromStorage.hooks';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

export {
  useGetFromStorage,
  useGetWholeStorage,
  useSetMultipleValues,
  useSetSingleValue,
  useDeleteFromStorage,
};
