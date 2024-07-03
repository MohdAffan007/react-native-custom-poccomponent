// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseYourPlan from '../screens/ChooseYourPlan';
import { Button, Image, Text, BackHandler, TouchableOpacity, NativeModules, Platform } from 'react-native';
import SelectPlans from '../screens/SelectPlans';

const Stack = createNativeStackNavigator();
const handleBackButton = () => {
  BackHandler.exitApp();
};
const { TestConnectNative } = NativeModules

const Routes = ({ rootTag }) => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="ChooseYourPlan" component={ChooseYourPlan} options={{
        headerTitle: 'Choose a plan to watch',
        headerLeft: () => (
          <>
            <TouchableOpacity onPress={() => {
              if (Platform.OS == 'ios') {
                TestConnectNative?.dismissViewController?.(rootTag)
              } else {
                handleBackButton()
              }
            }}>
              <Image
                source={require('../assets/png/backArrowPng.png')}
                style={{ width: 25, height: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
          </>
        ),
      }} />
      <Stack.Screen initialParams={{ rootTag }} name="SelectPlans" component={SelectPlans} options={{
        headerTitle: 'Click to choose any 6 Apps',

      }} />
    </Stack.Navigator>
  );
};

export default Routes;
