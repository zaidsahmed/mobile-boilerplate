import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants'
import { useLocalization } from '@/hooks/useLocalization'
import styles from './styles'
import { useLoginViewModel } from './useLoginViewModel'

const LoginScreen = () => {
  const {
    theme,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleRegister,
    handleForgotPassword,
    handleLoginWithGoogle,
    handleLoginWithFacebook,
    handleLoginWithApple,
  } = useLoginViewModel()
  const stylesObj = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={stylesObj.container}>
      <ThemedText type='title' style={stylesObj.title}>
        {t('login.title')}
      </ThemedText>
      <TextInput
        style={stylesObj.input}
        placeholder={t('login.email')}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TextInput
        style={stylesObj.input}
        placeholder={t('login.password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <ThemedText type='link' style={stylesObj.forgotPassword}>
          {t('login.forgotPassword')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={stylesObj.button} onPress={handleLogin}>
        <ThemedText style={stylesObj.buttonText}>
          {t('login.loginButton')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={stylesObj.buttonOutline}
        onPress={handleRegister}
      >
        <ThemedText style={stylesObj.buttonOutlineText}>
          {t('login.registerButton')}
        </ThemedText>
      </TouchableOpacity>

      <ThemedText style={stylesObj.socialLoginText}>
        {t('login.orLoginWith')}
      </ThemedText>
      <TouchableOpacity
        style={[stylesObj.socialButton, stylesObj.google]}
        onPress={handleLoginWithGoogle}
      >
        <ThemedText style={stylesObj.socialButtonText}>
          {t('login.continueWithGoogle')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[stylesObj.socialButton, stylesObj.facebook]}
        onPress={handleLoginWithFacebook}
      >
        <ThemedText style={stylesObj.socialButtonText}>
          {t('login.continueWithFacebook')}
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[stylesObj.socialButton, stylesObj.apple]}
        onPress={handleLoginWithApple}
      >
        <ThemedText style={stylesObj.socialButtonText}>
          {t('login.continueWithApple')}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  )
}

export default LoginScreen
