import { useState } from 'react'
import { Keyboard } from 'react-native'

import { useColorScheme } from '@/hooks/useColorScheme'
import { useRouter } from 'expo-router'

const OTP_LENGTHS = [4, 6]

export const useOTPViewModel = () => {
  const theme = useColorScheme() ?? 'light'
  const router = useRouter()

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [verifying, setVerifying] = useState(false)

  const handleChange = (text: string) => {
    // Only allow numbers, max 6 digits
    const sanitized = text.replace(/[^0-9]/g, '').slice(0, 6)
    setOtp(sanitized)
    setError('')
    setSuccess('')
  }

  const handleVerify = () => {
    if (verifying) return
    Keyboard.dismiss()
    if (!OTP_LENGTHS.includes(otp.length)) {
      setSuccess('')
      setError('OTP must be 4 or 6 digits')
      setVerifying(false)
      return
    }
    setVerifying(true)

    // Simulate verification (replace with real logic)
    setTimeout(() => {
      setVerifying(false)
      setSuccess('OTP verified!')
    }, 1000)

    // Navigate to Home after verification
    setTimeout(() => {
      router.replace('/Home')
      setSuccess('')
    }, 1500)
  }

  return {
    theme,
    otp,
    setOtp,
    error,
    setError,
    success,
    setSuccess,
    verifying,
    handleChange,
    handleVerify,
  }
}
