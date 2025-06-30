import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

const OTP_LENGTHS = [4, 6]

const OTPVerificationScreen = () => {
  const theme = useColorScheme() ?? 'light'
  const _styles = styles(theme)

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [verifying, setVerifying] = useState(false)

  const handleChange = (text: string) => {
    // Only allow numbers, max 6 digits
    const sanitized = text.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(sanitized)
    setError('')
    setSuccess('')
  }

  const handleVerify = () => {
    Keyboard.dismiss()
    if (!OTP_LENGTHS.includes(otp.length)) {
      setSuccess('')
      setError('OTP must be 4 or 6 digits')
      return
    }
    setVerifying(true)

    // Simulate verification (replace with real logic)

    setTimeout(() => {
      setVerifying(false)
      setSuccess('OTP verified!')
    }, 1000)
  }

  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        Verify OTP
      </ThemedText>
      <ThemedText style={_styles.label}>
        Enter the 4 or 6 digit code sent to you:
      </ThemedText>
      <TextInput
        style={_styles.input}
        value={otp}
        onChangeText={handleChange}
        keyboardType='number-pad'
        maxLength={6}
        placeholder='Enter OTP'
        placeholderTextColor={
          theme === 'light' ? Colors.light.gray60 : Colors.dark.gray60
        }
        textAlign='center'
        autoFocus
      />
      {error ? <ThemedText style={_styles.error}>{error}</ThemedText> : null}
      {success ? (
        <ThemedText style={_styles.success}>{success}</ThemedText>
      ) : null}
      <TouchableOpacity
        style={[_styles.button, verifying && _styles.buttonDisabled]}
        onPress={handleVerify}
        disabled={verifying}
        activeOpacity={0.8}
      >
        <ThemedText style={_styles.buttonText}>
          {verifying ? 'Verifying...' : 'Verify OTP'}
        </ThemedText>
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
    },
    title: {
      fontSize: 28,
      marginBottom: 16,
      fontWeight: 'bold',
    },
    label: {
      fontSize: 16,
      marginBottom: 12,
      textAlign: 'center',
    },
    input: {
      width: 250,
      height: 48,
      borderWidth: 1,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderRadius: 8,
      fontSize: 24,
      marginBottom: 12,
      backgroundColor: Colors.white,
      color: Colors.darkCharcoal,
      letterSpacing: 8,
    },
    error: {
      color: 'red',
      marginBottom: 12,
      textAlign: 'center',
    },
    success: {
      color: 'green',
      marginBottom: 12,
      textAlign: 'center',
    },
    button: {
      backgroundColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonDisabled: {
      opacity: 0.6,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
export default OTPVerificationScreen
