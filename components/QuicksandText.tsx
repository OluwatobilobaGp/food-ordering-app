import React from 'react'
import { Text } from 'react-native'

export default function QuicksandText({title}: {title: string}) {
 return (
                          <Text className="h1-bold text-white leading-tight" style={{ fontFamily: 'QuickSand-Bold' }}>
                            {title}
                          </Text>
  )
}
