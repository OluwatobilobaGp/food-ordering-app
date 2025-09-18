import { images } from '@/constants'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>()
  const [query, setQuery] = useState(params.query);

  const handleSearch = (text: string) => {
    setQuery(text);

    if (!text) router.setParams({ query: undefined });
  };

  const handleSubmit = () => {
        if(query.trim()) router.setParams({ query });
  }

  return (
    <View className="relative flex flex-row items-center justify-center w-full bg-white shadow-md shadow-black/10 rounded-full  font-quicksand-medium text-dark-100 gap-5">
      <TextInput
        className='flex-1 p-5'
        placeholder='search for pizzaz, burges...'
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={handleSubmit}
        placeholderTextColor="#A0A0A0"
        returnKeyType="Search"
      />
      <TouchableOpacity
        className='pr-5'
        onPress={() => router.setParams({ query })}
      >
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