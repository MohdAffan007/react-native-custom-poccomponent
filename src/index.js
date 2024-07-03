// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/Routes';
// import 'react-native-gesture-handler';

const POCComponent = ({rootTag}) => {
  return (
    <NavigationContainer>
      <Routes rootTag={rootTag}/>
    </NavigationContainer>
  );
};

export default POCComponent;