import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CustomButtonProps } from '@/type';
import cn from "clsx";

const CustomButton = ({
    onPress,
    title = "Click Me",
    style,
    textStyle,
    leftIcon,
    isLoading = false,
}: CustomButtonProps) => {

    return (
        <TouchableOpacity className={cn('bg-primary rounded-full p-3 w-full flex flex-row justify-center ', style)} onPress={onPress}>
            {leftIcon}

            <View className="flex-center flex items-center justify-center flex-row">
                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text className={cn('text-white-100 paragraph-semibold', textStyle)} style={{ fontFamily: 'QuickSand-Bold' }}>
                        {title}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton