import { useState } from 'react';
import { View, Text } from 'react-native';

const ToggleOnOff = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View className="bg-white rounded-full border-main-3 border-[3px] flex-row items-center py-[.5] px-[.9]">
      <Text className="text-main-3 font-bold">{isOn ? 'ON' : 'OFF'}</Text>
      <View className="bg-white rounded-full border-main-3 border-2 p-[.9]">
        <View className="rounded-full bg-main-3  p-2"></View>
      </View>
    </View>
  );
};

export default ToggleOnOff;
