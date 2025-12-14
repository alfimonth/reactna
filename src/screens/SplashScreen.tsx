import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import icons from '@/data/icon';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const SplashScreen = () => {
  const navigation = useNavigation<NavProp>();
  const Icon = icons.next;
  return (
    <SafeAreaView className="bg-main-2 flex-1 p-4">
      <StatusBar />
      <View className="justify-between flex-1">
        <Text className="text-surface-2 text-body-2/semibold">smartme</Text>
        <View className="gap-3">
          <Text className="text-surface-2 text-heading-1/semibold">
            Welcome Home
          </Text>
          <Text className="text-surface-2 leading-5 text-sm tracking-wider font-poppins-regular">
            no matter how far you go,{'\n'}home will be your destination to
            return to.{'\n'}let's make your home comfortable
          </Text>
        </View>
        <Image
          source={require('../assets/images/ui/cool-kids-fresh-air.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          className="w-full gap-2 justify-center flex-row items-center bg-border py-4 rounded-md elevation-sm"
        >
          <Text className="text-surface-2 text-body-2/semibold">
            Get Started
          </Text>
          <Icon stroke={'#fff'} />
        </TouchableOpacity>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
