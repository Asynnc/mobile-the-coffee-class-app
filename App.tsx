import React from 'react';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

import { SignIn } from './src/screens/SignIn'
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent' />
      <SignIn />
    </ThemeProvider>
  );
}