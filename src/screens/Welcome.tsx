import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

function WelcomeScreen<StackScreenProps>({ navigation }) {
  return (
    <View>
      <Text>Welcome screen!</Text>
      <View >
        <Pressable className="bg-background border border-white rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Pressable>
        <Pressable className="bg-background border border-white rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
      </View>
    </View>
  );
}


export default WelcomeScreen;
