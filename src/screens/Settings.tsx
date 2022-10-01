
import React from 'react';
import {Modal, TouchableOpacity,Text,Pressable, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

function Settings() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
 <View > 
      <Pressable onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons name="menu" color='gray' size={'30'} />
          </Pressable>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
  }}>
  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
  <View className="h-[30%] mt-auto bg-background border rounded-t-3xl ">
      <Pressable onPress={() => signOut(auth)} >
    <View className="flex flex-row m-4" >
          <MaterialCommunityIcons name="logout" color='white' size={'30'} />
      <Text className="text-white text-xl">Logout</Text>

        </View>
        </Pressable>
  </View>
  </TouchableOpacity>
</Modal>
</View>
  );
}


export default Settings;


