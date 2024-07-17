// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseYourPlan from '../screens/ChooseYourPlan';
import { Button, Image, Text, BackHandler, TouchableOpacity, NativeModules, Platform } from 'react-native';
import SelectPlans from '../screens/SelectPlans';
import YourSelectedPlans from '../screens/YourSelectedPlans';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const handleBackButton = () => {
  BackHandler.exitApp(); 
};
const {TestConnectNative} = NativeModules

const Routes = ({rootTag,androidProps}) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator >
      <Stack.Screen initialParams={{ androidProps:androidProps }}  name="ChooseYourPlan" component={ChooseYourPlan} options={{
     headerTitle: 'Choose a plan to watch',
     headerStyle:{backgroundColor:'black'},
     headerTitleStyle:{color:'white'},
          headerLeft: () => (
           <>
           <TouchableOpacity onPress={()=>{
         if (Platform.OS == 'ios') {
          TestConnectNative?.dismissViewController?.(rootTag)
        } else {
          handleBackButton()
        }
        }    }>
           <Image
                source={require('../assets/png/arrowBack.png')}
                style={{ width: 25, height: 25, marginRight: 10, backgroundColor:'black'}}
              />
           </TouchableOpacity>
           </>
          ),
        }}/>
           <Stack.Screen initialParams={{rootTag}} name="SelectPlans" component={SelectPlans} options={{
     headerTitle: 'Click to choose any 6 Apps',
     headerTitleStyle:{color:'white'},
     headerStyle:{backgroundColor:'black'}
        }}/>
      <Stack.Screen name="YourSelectedPlans"  initialParams={{rootTag}} component={YourSelectedPlans}options={{
        headerTitle: "That's A Great Choice",
        headerTitleStyle:{color:'white'},
        headerStyle:{backgroundColor:'black'},
        headerLeft: () => (
          <>
            <TouchableOpacity onPress={() => {
              navigation.goBack()
            }}>
              <Image
                source={require('../assets/png/arrowBack.png')}
                style={{ width: 25, height: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
          </>
        ),
      }}/>
   
    </Stack.Navigator>
  );
};

export default Routes;
