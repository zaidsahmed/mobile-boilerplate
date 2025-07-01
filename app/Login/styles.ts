import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

const styles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 32,
    },
    input: {
      width: '100%',
      height: 48,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
      fontSize: 16,
    },
    forgotPassword: {
      color: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      alignSelf: 'flex-end',
      marginBottom: 24,
    },
    button: {
      width: '100%',
      backgroundColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 12,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonOutline: {
      width: '100%',
      borderColor:
        theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      borderWidth: 1,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonOutlineText: {
      color: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    socialLoginText: {
      marginTop: 24,
      marginBottom: 8,
      fontSize: 16,
      color: theme === 'light' ? Colors.light.argent : Colors.dark.argent,
      alignSelf: 'center',
    },
    socialButton: {
      width: '100%',
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    socialButtonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    google: {
      backgroundColor: Colors.googleRed,
    },
    facebook: {
      backgroundColor: Colors.facebookBlue,
    },
    apple: {
      backgroundColor: Colors.appleBlack,
    },
  })

export default styles
