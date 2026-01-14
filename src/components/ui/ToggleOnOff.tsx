import { useState } from 'react';
import { View, Text } from 'react-native';

const ToggleOnOff = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View className="bg-white rounded-full gap-[2px] border-main-3 border-[3px] flex-row items-center py-[.5] pr-[.9] pl-[2px]">
      <Text className="text-main-3 font-bold">{isOn ? 'ON' : 'OFF'}</Text>
      <View className="bg-white rounded-full border-main-3 border-[2.3px] p-[.9] relative">
        <View className="rounded-full bg-main-3  p-2" />
        <View className="absolute -top-1 right-0 gap-1 -rotate-45">
          <View className="w-[3px] h-[2.5px] bg-white" />
          <View className="w-[3px] h-[2.5px] bg-white" />
        </View>
      </View>
    </View>
  );
};

export default ToggleOnOff;
