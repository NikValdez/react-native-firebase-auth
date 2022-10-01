import React from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { user } = useAuth();

  return (
    <View className="m-10">
      <Text className="text-white">Welcome {user?.email}!</Text>
      <View className="mt-10 bg-blue">
        <Text className="text-white">You are logged in!</Text>
      </View>

      <Pressable onPress={() => signOut(auth)}><Text className="text-white">Logout</Text></Pressable>
    </View>
  );
}

