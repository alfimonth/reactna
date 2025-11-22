import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const SplashScreen = () => {
  const navigation = useNavigation<NavProp>();
  return (
    <SafeAreaView className="bg-main-2 flex-1 p-4">
      <StatusBar />
      <View className="justify-between flex-1">
        <Text className="text-surface-2 text-body-2 font-semibold">
          smartme
        </Text>
        <View className="gap-3">
          <Text className="text-surface-2 text-heading-2 font-semibold">
            Welcome Home
          </Text>
          <Text className="text-surface-2 leading-5 text-sm tracking-wider">
            No matter how far you go,{'\n'}home will be your destination to
            return to.{'\n'}let's make your home comfortable
          </Text>
        </View>
        <View className="h-64 bg-main opacity-50" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          className="w-full justify-center items-center bg-border h-12 rounded-md"
        >
          <Text className="text-surface-2 text-body-2 font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
