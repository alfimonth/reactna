import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import icons from '@/data/icon';

type ToggleOnOffProps = {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (nextValue: boolean) => void;
};

const ToggleOnOff = ({ value, defaultValue = false, onChange }: ToggleOnOffProps) => {
  const isControlled = value !== undefined;
  const [isOn, setIsOn] = useState(defaultValue);
  const toggleAnim = useRef(new Animated.Value(0)).current;
  const slideDistance = -23;

  useEffect(() => {
    if (isControlled) {
      setIsOn(value);
    }
  }, [isControlled, value]);

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
  const labelTranslateX = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });
  const LabelIcon = isOn ? icons.on : icons.off;

  return (
    <Pressable
      onPress={() => {
        const nextValue = !isOn;
        if (!isControlled) {
          setIsOn(nextValue);
        }
        onChange?.(nextValue);
      }}
      className={`bg-white rounded-full gap-[2px] ${isOn ? 'border-red-500' : 'border-main-3'} border-[3px] flex-row items-center py-[.5] pr-[.9] pl-[2px]`}
    >
      <Animated.View style={{ transform: [{ translateX: labelTranslateX }] }}>
        <LabelIcon width={34} height={16} />
      </Animated.View>
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
