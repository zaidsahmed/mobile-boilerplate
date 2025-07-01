import React from 'react'
import 'react-native-reanimated'
import '../i18n'

import { useColorScheme } from '@/hooks/useColorScheme'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ToastProvider } from '../providers/ToastProvider'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <ToastProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme}>
        <Stack>
          <Stack.Screen name='Login' options={{ headerShown: false }} />
          <Stack.Screen name='Register' options={{ headerShown: false }} />
          <Stack.Screen name='OTP' options={{ headerShown: false }} />
          <Stack.Screen
            name='ForgotPassword'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: true, title: 'Home' }}
          />
        </Stack>
        <StatusBar style='auto' />
      </ThemeProvider>
    </ToastProvider>
  )
}
