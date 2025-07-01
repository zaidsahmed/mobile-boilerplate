import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { useLocalization } from '@/hooks/useLocalization'
import { useForgotPasswordViewModel } from './useForgotPasswordViewModel'

const ForgotPasswordScreen = () => {
  const { theme, email, setEmail, handleForgotPassword } =
    useForgotPasswordViewModel()
  const stylesObj = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={stylesObj.container}>
      <ThemedText type='title' style={stylesObj.title}>
        {t('forgotPassword.title')}
      </ThemedText>
      <ThemedText style={stylesObj.label}>
        {t('forgotPassword.label')}
      </ThemedText>
      <TextInput
        style={stylesObj.input}
        placeholder={t('forgotPassword.email')}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TouchableOpacity style={stylesObj.button} onPress={handleForgotPassword}>
        <ThemedText style={stylesObj.buttonText}>
          {t('forgotPassword.sendResetLink')}
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
