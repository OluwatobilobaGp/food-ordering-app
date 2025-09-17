import { images } from '@/constants'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>()
  const [query, setQuery] = useState(params.query);

  return (
    <View className='searchbar'>
      <TextInput
          className='flex-1 p-5'
          placeholder='search for pizzaz, burges...'
          value={query}
          placeholderTextColor="A0A0A0"
       />
       <TouchableOpacity className='pr-5' onPress={() => console.log("Search pressed")}>
          <Image
              source={images.search}
              className='size-6'
              resizeMode='contain'
              tintColor="#5D5F6D"

          />
       </TouchableOpacity>
    </View>
  )
}

export default SearchBar