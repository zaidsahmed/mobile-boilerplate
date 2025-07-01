import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants'
import { useLocalization } from '@/hooks/useLocalization'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { useForgotPasswordViewModel } from './useForgotPasswordViewModel'

const ForgotPasswordScreen = () => {
  const { theme, email, setEmail, handleForgotPassword } =
    useForgotPasswordViewModel()
  const stylesObj = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={stylesObj.container}>
      <BackButton />
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

export default ForgotPasswordScreen
