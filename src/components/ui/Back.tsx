import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import icons from '@/data/icon';

const Back = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.goBack();
      }}
      className="flex-row items-center"
    >
      <icons.back />
      <Text className="text-white text-caption-1/regular">Back</Text>
    </TouchableOpacity>
  );
};

export default Back;
