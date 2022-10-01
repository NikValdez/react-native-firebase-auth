import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'white'} size={'36'} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
