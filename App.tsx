/// <reference types="nativewind/types" />
import { StatusBar } from "expo-status-bar"
import { Text, TextInput, View, StyleSheet, Pressable, Image } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from "./src/screens/SignIn"
import { useFonts } from 'expo-font'
export default function App() {
  const [loaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Black-Italic": require("./assets/fonts/Montserrat-BlackItalic.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-BoldItalic": require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-ExtaBoldItalic": require("./assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    "Montserrat-ExtaLight": require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    "Montserrat-ExtaLightItalic": require("./assets/fonts/Montserrat-ExtraLightItalic.ttf"),
    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-LightItalic": require("./assets/fonts/Montserrat-LightItalic.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-MediumItalic": require("./assets/fonts/Montserrat-MediumItalic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-SemiBoldItalic": require("./assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-ThinItalic": require("./assets/fonts/Montserrat-ThinItalic.ttf"),
    "Gotu-Regular": require("./assets/fonts/Gotu-Regular.ttf")
  })

  if (!loaded) {
    return null
  }

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer >
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Signin" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  )

}

