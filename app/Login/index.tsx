import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLoginViewModel } from './useLoginViewModel';

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
  } = useLoginViewModel();
  const _styles = styles(theme);

  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        Login
      </ThemedText>
      <TextInput
        style={_styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TextInput
        style={_styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={
          theme === 'light' ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <ThemedText type='link' style={_styles.forgotPassword}>
          Forgot Password?
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.button} onPress={handleLogin}>
        <ThemedText style={_styles.buttonText}>Login</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.buttonOutline} onPress={handleRegister}>
        <ThemedText style={_styles.buttonOutlineText}>Register</ThemedText>
      </TouchableOpacity>

      <ThemedText style={_styles.socialLoginText}>Or login with</ThemedText>
      <TouchableOpacity
        style={[_styles.socialButton, _styles.google]}
        onPress={() => {
          /* handle Google login */
        }}
      >
        <ThemedText style={_styles.socialButtonText}>
          Continue with Google
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[_styles.socialButton, _styles.facebook]}
        onPress={() => {
          /* handle Facebook login */
        }}
      >
        <ThemedText style={_styles.socialButtonText}>
          Continue with Facebook
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[_styles.socialButton, _styles.apple]}
        onPress={() => {
          /* handle Apple login */
        }}
      >
        <ThemedText style={_styles.socialButtonText}>
          Continue with Apple
        </ThemedText>
      </TouchableOpacity>
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
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 32,
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
    forgotPassword: {
      color: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      alignSelf: 'flex-end',
      marginBottom: 24,
    },
    button: {
      width: '100%',
      backgroundColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 12,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonOutline: {
      width: '100%',
      borderColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      borderWidth: 1,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonOutlineText: {
      color: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    socialLoginText: {
      marginTop: 24,
      marginBottom: 8,
      fontSize: 16,
      color: theme === 'light' ? Colors.light.argent : Colors.dark.argent,
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
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    google: {
      backgroundColor: Colors.googleRed,
    },
    facebook: {
      backgroundColor: Colors.facebookBlue,
    },
    apple: {
      backgroundColor: Colors.appleBlack,
    },
  })

export default LoginScreen
