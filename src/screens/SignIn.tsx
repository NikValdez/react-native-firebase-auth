/// <reference types="nativewind/types" />
import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View, StyleSheet, Pressable, Image } from "react-native"
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import logo from "../../assets/logo.png"

export default function SignIn() {
  return (
    <View className="w-full h-full bg-background">
      <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
        <Image source={logo} style={{ width: 100, height: 100, alignSelf: "center" }} />
        <Text className="block  font-title text-2xl font-bold text-center text-white">
          Sign In
        </Text>
        <View className="space-y-6" >
          <View className="mt-1 space-y-4">
            <View className="flex-1 font-main flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              <Icon style={styles.icon} name="email" size={18} color="gray" />
              <TextInput
                placeholder="Email"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
              />
            </View>
            <View className="flex-1 flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              <Icon style={styles.icon} name="lock" size={18} color="gray" />
              <TextInput
                placeholder="Password"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                secureTextEntry={true}
              />
            </View>

            <Pressable className="bg-background border border-white rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base">Sign In</Text></Pressable>
          </View>
          <Text className="text-center text-white font-main text-base">Don't have an account? <Text className="text-button">Sign Up</Text></Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View >

  )

}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
