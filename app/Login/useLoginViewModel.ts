import { useColorScheme } from '@/hooks/useColorScheme'
import { useRouter } from 'expo-router'
import { useState } from 'react'

export const useLoginViewModel = () => {
  const router = useRouter()
  const theme = useColorScheme() ?? 'light'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Validate email and password
    // ...
    console.log('handleLogin')
    // Implement login logic here
    router.push('/OTP')
    // router.push('/Home');
  }

  const handleRegister = () => {
    console.log('handleRegister')
    router.push('/Register')
  }

  const handleForgotPassword = () => {
    console.log('handleForgotPassword')
    router.push('/ForgotPassword')
  }

  // Social login handlers can be added here if needed
  const handleLoginWithGoogle = () => {
    console.log('Google login')
    router.push('/Home')
  }

  const handleLoginWithFacebook = () => {
    console.log('Facebook login')
    router.push('/Home')
  }

  const handleLoginWithApple = () => {
    console.log('Apple login')
    router.push('/Home')
  }

  return {
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
  }
}
