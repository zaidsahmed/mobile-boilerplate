import { useState } from 'react'

import api from '@/api/axios'
import { useApi } from '@/hooks/useApi'
import { useColorScheme } from '@/hooks/useColorScheme'
// import { useAuthNavigation } from '@navigation/AuthStack'
import { useToast } from '@/providers/ToastProvider'
import { useRouter } from 'expo-router'

export const useLoginViewModel = () => {
  const router = useRouter()
  const theme = useColorScheme() ?? 'light'
  // const { goToRegister, goToForgotPassword } = useAuthNavigation()
  const { showToast } = useToast()

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

  const showErrorToast = (title: string, message: string) => {
    showToast({
      type: 'error',
      text1: title,
      text2: message,
    })
  }
  const showSuccessToast = (title: string, message: string) => {
    showToast({
      type: 'success',
      text1: title,
      text2: message,
    })
  }

  const handleLogin = async () => {
    // Validate email and password
    if (!email || !password) {
      showErrorToast('Missing Fields', 'Email and password are required')
      return
    }
    const result = await callLoginApi()
    if (result) {
      showSuccessToast('Login Successful', 'You have logged in successfully.')
      router.push('/OTP') // or router.push('/Home');
    } else if (loginError) {
      showErrorToast(
        'Login Failed',
        loginError.message || 'Login failed. Please try again.'
      )
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
