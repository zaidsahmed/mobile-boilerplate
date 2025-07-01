import React from 'react'
import { Button, TextInput, View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useLocalization } from '@/hooks/useLocalization'
import styles from './styles'
import { useRegisterViewModel } from './useRegisterViewModel'

const RegisterScreen = () => {
  const {
    theme,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    submitted,
    handleSubmit,
  } = useRegisterViewModel()
  const stylesObj = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={stylesObj.container}>
      <ThemedText type='title' style={stylesObj.title}>
        {t('register.title')}
      </ThemedText>
      <View style={stylesObj.form}>
        <TextInput
          style={stylesObj.input}
          placeholder={t('register.name')}
          value={name}
          onChangeText={setName}
          autoCapitalize='words'
        />
        <TextInput
          style={stylesObj.input}
          placeholder={t('register.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={stylesObj.input}
          placeholder={t('register.password')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={t('register.registerButton')} onPress={handleSubmit} />
        {submitted && (
          <ThemedText style={stylesObj.successMsg}>
            {t('register.success')}
          </ThemedText>
        )}
      </View>
    </ThemedView>
  )
}

export default RegisterScreen
