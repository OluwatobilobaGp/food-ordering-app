import { useCartStore } from '@/store/cart.store';
import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList
          data={items}
          renderItem={({ item }) => <Text>Cart Item</Text> }
      />
    </SafeAreaView>
  )
}

export default Cart