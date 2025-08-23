import { Text, TextInput, View } from 'react-native';
import { CustomInputProps } from '@/type';
import { useState } from 'react';
import cn from "clsx";

const CustomInput = ({
    placeholder = "Enter Text",
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType = "default",

} : CustomInputProps ) => {
    const [isFocused, setIsFocused] = useState(false);


  return (
    <View className='w-full'>
      <Text className='label' style={{ fontFamily: 'QuickSand-Bold' }}>{label}</Text>

      <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            placeholderTextColor="#888"
            className={cn('input',isFocused ? 'border-primary' : 'border-grey-300')}
            style={{ fontFamily: 'QuickSand-Bold' }}
       />
    </View>
  )
}

export default CustomInput