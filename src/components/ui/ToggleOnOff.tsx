import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';

const ToggleOnOff = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleAnim = useRef(new Animated.Value(0)).current;
  const slideDistance = -23;

  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isOn ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [isOn, toggleAnim]);

  const translateX = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, slideDistance],
  });

  const rotate = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });
  const textTranslateX = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <Pressable
      onPress={() => setIsOn((prev) => !prev)}
      className={`bg-white rounded-full gap-[2px] ${isOn ? 'border-red-500' : 'border-main-3'} border-[3px] flex-row items-center py-[.5] pr-[.9] pl-[2px]`}
    >
      <Animated.Text
        className={`font-bold ${isOn ? 'text-red-500' : 'text-main-3'}`}
        style={{ transform: [{ translateX: textTranslateX }] }}
      >
        {isOn ? 'ON' : 'OFF'}
      </Animated.Text>
      <Animated.View
        className={`bg-white rounded-full ${isOn ? 'border-red-500' : 'border-main-3'} border-[2.3px] p-[.9] relative`}
        style={{ transform: [{ translateX }, { rotate }] }}
      >
        <View className={`rounded-full ${isOn ? 'bg-red-500' : 'bg-main-3'} p-2`} />
        <View className="absolute -top-1 right-0 gap-1 -rotate-45">
          <View className="w-[3px] h-[2.5px] bg-white" />
          <View className="w-[3px] h-[2.5px] bg-white" />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ToggleOnOff;
