import React, { useState } from 'react'
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('')

  const handleForgotPassword = () => {
    // Here you would typically trigger your password reset logic
    Alert.alert(
      'Password Reset',
      `If an account exists for ${email}, a reset link will be sent.`
    )
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Forgot Password</ThemedText>
      <ThemedText style={styles.label}>Enter your email address:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor='#888'
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <ThemedText style={styles.buttonText}>Send Reset Link</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default ForgotPasswordScreen
