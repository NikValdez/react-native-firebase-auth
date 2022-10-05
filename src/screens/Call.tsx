
import React from 'react';
import { Text, Pressable, View } from 'react-native';
import CreateClient from '../components/CreateClient'
function Call() {
  return (
    <View className="m-10">
      <Text className="text-white text-xl">Make a Call</Text>
    <CreateClient />
    </View>
  );
}


export default Call;
