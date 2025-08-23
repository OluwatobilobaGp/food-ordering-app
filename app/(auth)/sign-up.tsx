import { Alert, Text, View } from 'react-native'
import { Link, router } from 'expo-router'
import CustomInput from '@/components/Custominput'
import CustomButton from '@/components/CustomButton'
import { useState } from 'react'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const submit = async () => {
        const { name, email, password } = form;

        if(!name || !email || !password) return Alert.alert('Error', 'Please enter valid email address & password.');

        setIsSubmitting(true)

        try {

            await createUser({ email,  password,  name });

            router.replace('/');
        } catch (error: any) {
            Alert.alert('Error', error.message);
            // Sentry.captureEvent(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View className='gap-10 bg-white rounded-lg p-5 mt-5' >
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
                title="Sign Up"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className='flex flex-row justify-center items-center mt-5 gap-2'>
                <Text className='text-lg font-quicksand-bold text-gray-100' style={{ fontFamily: 'QuickSand-Bold' }}>
                    Already have an Account?
                </Text>
                <Link href="/sign-in" className="text-lg font-quicksand-bold text-primary" style={{ fontFamily: 'QuickSand-Bold' }}>
                    Sign In
                </Link>
            </View>

        </View>
    )

}

export default SignUp

