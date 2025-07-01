import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { useLocalization } from '@/hooks/useLocalization'
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

const styles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    form: {
      width: '100%',
      maxWidth: 400,
      marginTop: 20,
    },
    input: {
      height: 44,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 12,
      backgroundColor: theme === 'light' ? Colors.white : Colors.darkCharcoal,
      color: theme === 'light' ? Colors.black : Colors.white,
    },
    successMsg: {
      color: Colors.success,
      marginTop: 16,
      textAlign: 'center',
    },
  })

export default RegisterScreen
