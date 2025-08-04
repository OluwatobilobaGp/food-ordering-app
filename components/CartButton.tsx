import { images } from '@/constants';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
    const totalItems = 10;
  return (
    <TouchableOpacity className="p-2 rounded-full bg-primary flex items-center justify-center" onPress={() => { }}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className='cert-badge'>
          <Text className='small-bold text-white'>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton