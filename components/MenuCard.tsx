import { appwriteConfig } from '@/lib/appwrite';
import { useCartStore } from '@/store/cart.store';
import { MenuItem } from '@/type';
import { Image, Platform, Text, TouchableOpacity } from 'react-native';


const MenuCard = ({ item: { $id, image_url, name, price }}: {item : MenuItem}) => {
  const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
  const { addItem } = useCartStore();

    return (
        <TouchableOpacity className="menu-card" style={Platform.OS === 'android' ? { elevation: 10, shadowColor: '#878787', }: {}}>
            <Image source={{ uri: imageUrl }} className="size-32 absolute -top-10" resizeMode="contain" />
            <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1} style={{ fontFamily: 'QuickSand-Bold' }}>{name}</Text>
            <Text className="body-regular text-gray-200 mb-4" style={{ fontFamily: 'QuickSand-Bold' }}>From ${price}</Text>
            <TouchableOpacity onPress={() => addItem({id: $id, name, price, image_url: imageUrl, customizations: []})}>
                <Text className="paragraph-bold px-3 py-2 text-white bg-primary rounded-full" style={{ fontFamily: 'QuickSand-Bold' }}>Add to Cart +</Text>
            </TouchableOpacity>
        </TouchableOpacity>
  )
}

export default MenuCard