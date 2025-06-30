import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useRegisterViewModel } from './useRegisterViewModel';

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
  } = useRegisterViewModel();
  const _styles = styles(theme);

  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        Register
      </ThemedText>
      <View style={_styles.form}>
        <TextInput
          style={_styles.input}
          placeholder='Name'
          value={name}
          onChangeText={setName}
          autoCapitalize='words'
        />
        <TextInput
          style={_styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={_styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title='Register' onPress={handleSubmit} />
        {submitted && (
          <ThemedText style={_styles.successMsg}>
            Registration submitted!
          </ThemedText>
        )}
      </View>
    </ThemedView>
  );
};

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
  });

export default RegisterScreen;
