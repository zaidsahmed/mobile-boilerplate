import React from 'react'
import { StyleSheet } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>
        Home Screen
      </ThemedText>
      <ThemedText style={styles.description}>
        Welcome to the home screen! This is where you can find the latest
        updates and features.
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
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
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default HomeScreen
