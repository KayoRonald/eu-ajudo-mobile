// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import 'react-native-safe-area-context'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
// import { Welcome } from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
