import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';
import { Colors } from '../../../../Colors';
import Users from '../../screens/users/Users';
export type RootStackParamList = {
  Home?: undefined;
  Users?:undefined
  Netflix?: {
    user: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerStyle: {backgroundColor: Colors.black},
            headerTitleStyle: {color: Colors.red},
            headerBackTitleStyle: {color: Colors.black},
          }}
        />
         <Stack.Screen
          name="Users"
          component={Users}
          options={{
            title: '',
            headerStyle: {backgroundColor: Colors.black},
            headerTitleStyle: {color: Colors.red},
            headerBackTitleStyle: {color: Colors.black},
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
