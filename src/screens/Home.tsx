import React from 'react';
import { Text, View} from 'react-native';
import { useAuth } from '../hooks/useAuth';


export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View className="w-full h-full">
      <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
      <Text className="text-white text-center text-2xl">Welcome {user?.email}!</Text>
    </View>
    </View>
  );
}

