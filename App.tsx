/// <reference types="nativewind/types" />
import React from 'react';
import './src/config/firebase';
import RootNavigation from './src/navigation';
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

  return (
    <RootNavigation />
  )

}

