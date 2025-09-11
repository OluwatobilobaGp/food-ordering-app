import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/Custominput'
import Sentry from "@sentry/react-native"
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
// import '../global.css'



const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit = async () => {
        const { email, password } = form;

        if (!email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try {


            // await SignIn({ email, password });

            Alert.alert('Success', "User Signed In Successfully");
            router.replace('/');
        } catch (error: any) {
            Alert.alert('Error', error.message);
            Sentry.captureEvent(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View className='gap-10 bg-white rounded-lg p-5 mt-5'>

            <CustomInput
                placeholder='Enter your email'
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
                label="Email"
                keyboardType='email-address'
            />

            <CustomInput
                placeholder='Enter your Password'
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
                label="Password"
                secureTextEntry={true}
            />

            <CustomButton
                title='Sign In'
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className='flex justify-center mt-5 flex-row gap-2'>
                <Text className='text-lg font-quicksand text-gray-100'>
                    Don&lsquo;t have an account
                </Text>
                <Link href="/(auth)/sign-up" className="text-lg font-quicksand-bold text-primary">
                    Sign Up
                </Link>
            </View>

        </View>
    )
}

export default SignIn