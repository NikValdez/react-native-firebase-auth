import React from 'react';
import { Text, Pressable,Image, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';

function WelcomeScreen<StackScreenProps>({ navigation }) {
  return (
    <View className="w-full h-full">
  <LinearGradient colors={['#141e30', '#243b55']} style={{flex:1, borderRadius: 20}}>
      <View className="mx-4 h-full flex justify-center align-center space-y-6">
      <View>
      <Image source={require('../../assets/phone.png')} style={{width: 250, height: 250, alignSelf: 'center'}}/>
      </View>
      <Text className="text-blue text-2xl font-bold text-center mx-6" >Keep all you client conversations in one place</Text>
      <Text className="text-white text-base text-center mx-4" >At legal call we allow you to contact your clients through voice and text without giving out your phone number</Text>
      <View >
        <Pressable className="bg-blue  rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign In')}>Sign In</Text></Pressable>
        <Pressable className="bg-blue rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
      </View>
    </View>
    </LinearGradient>
    </View>
  );
}


export default WelcomeScreen;
