import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/CustomHeader';
import useAuthStore from '@/store/auth.store';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const { user, logout } = useAuthStore();

  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={[user]}
        contentContainerClassName='pd-28 px-5 pt-5'
        renderItem={() =>
          <View>
            <View className="flex-1 items-center justify-center px-5">
              {user ? (
                <>
                  <Image source={{ uri: user.avatar }} className="size-24 rounded-full mb-4" />
                  <Text className="text-2xl font-quicksand-bold mb-2" style={{ fontFamily: 'QuickSand-Bold' }}>{`My Full Name : ${user.name}`}</Text>
                  <Text className="text-base text-gray-700 mb-4" style={{ fontFamily: 'QuickSand-Bold' }}>{user.email}</Text>
                  {/* Add more user details here if needed */}
                </>
              ) : (
                <Text className="text-lg text-gray-500">No user data found.</Text>
              )}
            </View>
          </View>
        }
        ListHeaderComponent={() => <CustomHeader title="Profile" />}
        ListFooterComponent={() => <CustomButton title="Log Out" onPress={logout} />}
      />





      <View>

      </View>

    </SafeAreaView>
  );
};

export default Profile;