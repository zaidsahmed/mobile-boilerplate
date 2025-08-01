import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

const styles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor:
        theme === 'light' ? Colors.light.background : Colors.dark.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'light' ? Colors.light.text : Colors.dark.text,
    },
  })

export default styles
