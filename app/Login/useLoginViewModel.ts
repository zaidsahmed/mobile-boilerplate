import { useState } from 'react'

import api from '@/api/axios'
import { useApi } from '@/hooks/useApi'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useRouter } from 'expo-router'
import { useState } from 'react'

export const useLoginViewModel = () => {
  const router = useRouter()
  const theme = useColorScheme() ?? 'light'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Setup the API hook for login
  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
    callApi: callLoginApi,
  } = useApi(async () => {
    const response = await api.post('/login', { email, password })
    return response.data
  })

  const handleLogin = async () => {
    // Validate email and password
    if (!email || !password) {
      alert('Email and password are required')
      return
    }
    const result = await callLoginApi()
    if (result) {
      // Handle successful login (e.g., save token, redirect)
      console.log('Login successful:', result)
      router.push('/OTP') // or router.push('/Home');
    } else if (loginError) {
      // Optionally, show loginError.message to the user
      console.log('Login error:', loginError)
    }
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
    loginLoading,
    loginError,
    loginData,
    handleRegister,
    handleForgotPassword,
    handleLoginWithGoogle,
    handleLoginWithFacebook,
    handleLoginWithApple,
  }
}
