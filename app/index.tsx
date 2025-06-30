import { useRouter } from 'expo-router'
import { useCallback, useEffect } from 'react'

export default function Index() {
  const { redirectToLogin } = useNavigationViewModel()

  useEffect(() => {
    redirectToLogin()
  }, [redirectToLogin])

  return null
}

function useNavigationViewModel() {
  const router = useRouter()

  const redirectToLogin = useCallback(() => {
    router.replace('/Login')
  }, [router])

  return {
    redirectToLogin,
  }
}
