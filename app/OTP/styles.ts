import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

const styles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    title: {
      fontSize: 28,
      marginBottom: 16,
      fontWeight: 'bold',
    },
    label: {
      fontSize: 16,
      marginBottom: 12,
      textAlign: 'center',
    },
    input: {
      width: 250,
      height: 48,
      borderWidth: 1,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderRadius: 8,
      fontSize: 24,
      marginBottom: 12,
      backgroundColor: Colors.white,
      color: Colors.darkCharcoal,
      letterSpacing: 8,
    },
    error: {
      color: Colors.error,
      marginBottom: 12,
      textAlign: 'center',
    },
    success: {
      color: Colors.success,
      marginBottom: 12,
      textAlign: 'center',
    },
    button: {
      backgroundColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      paddingVertical: 14,
      paddingHorizontal: 32,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonDisabled: {
      opacity: 0.6,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })

export default styles
