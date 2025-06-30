import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

const ForgotPasswordScreen = () => {
  const theme = useColorScheme() ?? 'light'
  const _styles = styles(theme)

  const [email, setEmail] = useState('')

  const handleForgotPassword = () => {
    // Here you would typically trigger your password reset logic
    Alert.alert(
      'Password Reset',
      `If an account exists for ${email}, a reset link will be sent.`
    )
  }

  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        Forgot Password
      </ThemedText>
      <ThemedText style={_styles.label}>Enter your email address:</ThemedText>
      <TextInput
        style={_styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TouchableOpacity style={_styles.button} onPress={handleForgotPassword}>
        <ThemedText style={_styles.buttonText}>Send Reset Link</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
      backgroundColor:
        theme === 'light' ? Colors.light.background : Colors.dark.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      height: 48,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
      fontSize: 16,
    },
    button: {
      width: '100%',
      backgroundColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  })

export default ForgotPasswordScreen
