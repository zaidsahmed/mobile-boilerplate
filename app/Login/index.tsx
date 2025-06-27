import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Validate email and password
    // ...

    console.log('handleLogin')
    // Implement login logic here
    router.push('/OTP')
    // router.push('/Home')
  }

  const handleRegister = () => {
    console.log('handleRegister')
    router.push('/Register')
  }

  const handleForgotPassword = () => {
    console.log('handleForgotPassword')
    router.push('/ForgotPassword')
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>
        Login
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#888'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor='#888'
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <ThemedText type='link' style={styles.forgotPassword}>
          Forgot Password?
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={handleRegister}>
        <ThemedText style={styles.buttonOutlineText}>Register</ThemedText>
      </TouchableOpacity>

      <ThemedText style={styles.socialLoginText}>Or login with</ThemedText>
      <TouchableOpacity
        style={[styles.socialButton, styles.google]}
        onPress={() => {
          /* handle Google login */
        }}
      >
        <ThemedText style={styles.socialButtonText}>
          Continue with Google
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.socialButton, styles.facebook]}
        onPress={() => {
          /* handle Facebook login */
        }}
      >
        <ThemedText style={styles.socialButtonText}>
          Continue with Facebook
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.socialButton, styles.apple]}
        onPress={() => {
          /* handle Apple login */
        }}
      >
        <ThemedText style={styles.socialButtonText}>
          Continue with Apple
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
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
  forgotPassword: {
    color: '#007bff',
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    width: '100%',
    borderColor: '#007bff',
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#007bff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginText: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 16,
    color: '#888',
    alignSelf: 'center',
  },
  socialButton: {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  google: {
    backgroundColor: '#DB4437',
  },
  facebook: {
    backgroundColor: '#4267B2',
  },
  apple: {
    backgroundColor: '#000',
  },
})

export default LoginScreen
