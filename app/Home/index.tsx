import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useHomeViewModel } from './useHomeViewModel';

const HomeScreen = () => {
  const { theme } = useHomeViewModel();
  const _styles = styles(theme);
  return (
    <ThemedView style={_styles.container}>
      <ThemedText type='title' style={_styles.title}>
        Home Screen
      </ThemedText>
      <ThemedText style={_styles.description}>
        Welcome to the home screen! This is where you can find the latest
        updates and features.
      </ThemedText>
    </ThemedView>
  );
};

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
  });

export default HomeScreen;
