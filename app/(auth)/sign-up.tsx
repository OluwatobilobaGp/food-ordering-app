import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/Custominput'
import { createUser } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import '../global.css'



export default function SignUp (){
        const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const submit = async () => {
        const { name, email, password } = form;

        if (!name || !email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try {

            await createUser({ email, password, name});

            router.replace('/');
        } catch (error: any) {
            Alert.alert('Error', error.message);
            // Sentry.captureEvent(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View>

            <CustomInput
                placeholder='Enter your full name'
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                label="Full name"
            />

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
                title='Sign Up'
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className='flex justify-center mt-5 flex-row gap-2'>
                <Text className='text-lg font-quicksand text-gray-100'>
                    Already have an Account?
                </Text>
                <Link href="/sign-in" className="text-lg font-quicksand-bold text-primary">
                    Sign Up
                </Link>
            </View>

        </View>
    )

}

