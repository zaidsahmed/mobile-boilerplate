import { useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export const useRegisterViewModel = () => {
  const theme = useColorScheme() ?? 'light';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    // Here you would typically handle registration logic (API call, validation, etc.)
  };

  return {
    theme,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    submitted,
    handleSubmit,
  };
};
