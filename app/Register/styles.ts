import { Colors } from '@/constants/Colors'
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
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    form: {
      width: '100%',
      maxWidth: 400,
      marginTop: 20,
    },
    input: {
      height: 44,
      borderColor:
        theme === 'light'
          ? Colors.light.chineseSilver
          : Colors.dark.chineseSilver,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 12,
      backgroundColor: theme === 'light' ? Colors.white : Colors.darkCharcoal,
      color: theme === 'light' ? Colors.black : Colors.white,
    },
    successMsg: {
      color: Colors.success,
      marginTop: 16,
      textAlign: 'center',
    },
  })

export default styles
