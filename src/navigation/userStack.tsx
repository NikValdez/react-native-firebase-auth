import React from 'react';
import {Modal, Text, View, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CallScreen from '../screens/Call';
import SettingsScreen from '../screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function UserStack() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0e1529' }
        }}
        sceneContainerStyle={{ backgroundColor: '#0e1529' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home-outline" color={focused ? 'white' : 'gray'} size={'30'} />
          ),
        }} />
        <Tab.Screen name="Call" component={CallScreen} options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="phone-outline" color={focused ? 'white' : 'gray'} size={'30'} />
          ),
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
          <SettingsScreen/>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
