import { images } from '@/constants';
import { useCartStore } from '@/store/cart.store';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
  const {getTotalItems} = useCartStore();
  const totalItems = getTotalItems();

  return (
    <TouchableOpacity className="flex items-center justify-center size-10 rounded-full bg-dark-100" onPress={() => router.push('/cart')}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className='absolute -top-2 -right-1 flex items-center justify-center size-5 bg-primary rounded-full font-quicksand-bold' >
          <Text className='small-bold text-white' style={{ fontFamily: 'QuickSand-Bold' }}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default CartButton