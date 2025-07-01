import React from 'react'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useLocalization } from '@/hooks/useLocalization'
import styles from './styles'
import { useHomeViewModel } from './useHomeViewModel'

const HomeScreen = () => {
  const { theme } = useHomeViewModel()
  const stylesObj = styles(theme)
  const { t } = useLocalization()

  return (
    <ThemedView style={stylesObj.container}>
      <ThemedText type='title' style={stylesObj.title}>
        {t('home.title')}
      </ThemedText>
      <ThemedText style={stylesObj.description}>
        {t('home.description')}
      </ThemedText>
    </ThemedView>
  )
}

export default HomeScreen
