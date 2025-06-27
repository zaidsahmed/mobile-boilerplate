import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const OTP_LENGTHS = [4, 6]

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [verifying, setVerifying] = useState(false)

  const handleChange = (text: string) => {
    // Only allow numbers, max 6 digits
    const sanitized = text.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(sanitized)
    setError('')
  }

  const handleVerify = () => {
    Keyboard.dismiss()
    if (!OTP_LENGTHS.includes(otp.length)) {
      setError('OTP must be 4 or 6 digits')
      return
    }
    setVerifying(true)
    // Simulate verification (replace with real logic)
    setTimeout(() => {
      setVerifying(false)
      setError('OTP verified! (simulate success)')
    }, 1000)
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>
        Verify OTP
      </ThemedText>
      <ThemedText style={styles.label}>
        Enter the 4 or 6 digit code sent to you:
      </ThemedText>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={handleChange}
        keyboardType='number-pad'
        maxLength={6}
        placeholder='Enter OTP'
        placeholderTextColor='#999'
        textAlign='center'
        autoFocus
      />
      {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}
      <TouchableOpacity
        style={[styles.button, verifying && styles.buttonDisabled]}
        onPress={handleVerify}
        disabled={verifying}
        activeOpacity={0.8}
      >
        <ThemedText style={styles.buttonText}>
          {verifying ? 'Verifying...' : 'Verify OTP'}
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
    width: 180,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 24,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#222',
    letterSpacing: 12,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
export default OTPVerificationScreen
