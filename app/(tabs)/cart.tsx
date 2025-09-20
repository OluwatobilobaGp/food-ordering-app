import CustomHeader from '@/components/CustomHeader';
import { useCartStore } from '@/store/cart.store';
import { PaymentInfoStripeProps } from '@/type';
import cn from "clsx";
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PaymentInfoStripe = ({ label,  value,  labelStyle,  valueStyle, }: PaymentInfoStripeProps) => (
    <View className="flex-between flex-row my-1">
        <Text className={cn("paragraph-medium text-gray-200", labelStyle)}>
            {label}
        </Text>
        <Text className={cn("paragraph-bold text-dark-100", valueStyle)}>
            {value}
        </Text>
    </View>
);


const Cart = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList
          data={items}
          renderItem={({ item }) => <Text>Cart Item</Text> }
          keyExtractor={(item) => item.id}
          contentContainerClassName='pd-28 px-5 pt-5'
          ListHeaderComponent={() => <CustomHeader title='Your Cart' />}
          ListEmptyComponent={() => <Text>Cart Empty</Text>}
          ListFooterComponent={() => totalItems > 0 && (
            <View className='mt-6 border border-grey-200 p-5 rounded-2xl'>
              <Text className='h3-bold text-dark-100 mb-5'>
                Payment Summary
              </Text>

              <PaymentInfoStripe label={`Total Items (${totalItems})`} />



            </View>
          )}
      />
    </SafeAreaView>
  )
}

export default Cart