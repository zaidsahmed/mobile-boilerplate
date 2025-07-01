import React, { createContext, ReactNode, useContext } from 'react'
import Toast from 'react-native-toast-message'

const ToastTypeEnums = Object.freeze({
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
})

// Define the context shape
interface ToastContextType {
  showToast: (options: {
    type?: 'success' | 'error' | 'info'
    text1: string
    text2?: string
    position?: 'top' | 'bottom'
    visibilityTime?: number
  }) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  // Function to show toast
  const showToast: ToastContextType['showToast'] = ({
    type = ToastTypeEnums.SUCCESS,
    text1,
    text2,
    position = 'top',
    visibilityTime = 5000,
  }) => {
    Toast.show({
      type,
      text1,
      text2,
      position,
      visibilityTime,
    })
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  )
}

// Custom hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
