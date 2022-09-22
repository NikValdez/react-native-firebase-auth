/// <reference types="nativewind/types" />
import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View } from "react-native"

export default function App() {
  return (
    <View className="mx-4 mt-20">
      <View className="bg-white space-y-6 ">
        <Text className="block text-2xl font-bold text-center text-gray-700">
          Login to Your Account
        </Text>
        <View className="space-y-6" >
          <View >
            <View className="mt-1 space-y-4">
              <TextInput
                placeholder="Email"
                className="block w-full rounded-xl bg-gray-100 px-3 py-4 placeholder-gray-400 "
              />
              <TextInput
                placeholder="Password"
                className="block w-full rounded-xl bg-gray-100 px-3 py-4 placeholder-gray-400 "
              />
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>

  )

}
