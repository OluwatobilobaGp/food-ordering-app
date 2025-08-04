import { Slot } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <SafeAreaView>
      <Text>Auth _layout</Text>
      <Slot />
    </SafeAreaView>
  )
}

export default _layout