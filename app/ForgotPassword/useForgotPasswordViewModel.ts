import { useState } from 'react';
import { Alert } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

export const useForgotPasswordViewModel = () => {
  const theme = useColorScheme() ?? 'light';
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Here you would typically trigger your password reset logic
    Alert.alert(
      'Password Reset',
      `If an account exists for ${email}, a reset link will be sent.`
    );
  };

  return {
    theme,
    email,
    setEmail,
    handleForgotPassword,
  };
};
