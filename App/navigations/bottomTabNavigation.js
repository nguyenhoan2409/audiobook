import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Library from '../screens/Library';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: '#4838D1',
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          } 

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Library"
        component={Library}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

