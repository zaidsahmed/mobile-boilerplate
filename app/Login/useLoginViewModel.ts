import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export const useLoginViewModel = () => {
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate email and password
    // ...
    console.log('handleLogin');
    // Implement login logic here
    router.push('/OTP');
    // router.push('/Home');
  };

  const handleRegister = () => {
    console.log('handleRegister');
    router.push('/Register');
  };

  const handleForgotPassword = () => {
    console.log('handleForgotPassword');
    router.push('/ForgotPassword');
  };

  // Social login handlers can be added here if needed

  return {
    theme,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleRegister,
    handleForgotPassword,
  };
};
