import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols'

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name']
  size?: number
  color: string
  style?: StyleProp<ViewStyle>
  weight?: SymbolWeight
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode='scaleAspectFit'
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  )
}
