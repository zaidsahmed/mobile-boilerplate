import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { useLocalization } from '@/hooks/useLocalization'
import { useOTPViewModel } from './useOTPViewModel'

const OTPVerificationScreen = () => {
  const { theme, otp, handleChange, error, success, verifying, handleVerify } =
    useOTPViewModel()
  const _styles = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        {t('otp.title')}
      </ThemedText>
      <ThemedText style={_styles.label}>{t('otp.label')}</ThemedText>
      <TextInput
        style={_styles.input}
        value={otp}
        onChangeText={handleChange}
        keyboardType='number-pad'
        maxLength={6}
        placeholder={t('otp.placeholder')}
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
          {verifying ? t('otp.verifying') : t('otp.verifyButton')}
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
      color: Colors.error,
      marginBottom: 12,
      textAlign: 'center',
    },
    success: {
      color: Colors.success,
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
