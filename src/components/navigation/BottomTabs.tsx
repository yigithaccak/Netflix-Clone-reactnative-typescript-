import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import MyNetflix from '../screens/mynetflix/MyNetflix';
import NewPopular from '../screens/newpopular/NewPopular';
import CustomIcons from '../../../assets/CustomIcons';
import {Colors} from '../../../Colors';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MyNetflix') {
            iconName = 'film';
          } else if (route.name === 'NewPopular') {
            iconName = 'joomla';
          }

          return <CustomIcons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'AnaSayfa',
          title: ' ',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />

      <Tab.Screen
        name="NewPopular"
        component={NewPopular}
        options={{
          tabBarLabel: 'Yeni ve Popüler',
          title: '',
          headerTitleStyle: {
            color: Colors.white,
          },
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />

      <Tab.Screen
        name="MyNetflix"
        component={MyNetflix}
        options={{
          tabBarLabel: `Benim Netflix'im`,
          title: '',
          headerTitleStyle: {
            color: Colors.white,
          },
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
