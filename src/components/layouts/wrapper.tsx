import { memo, ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeroWrapper = memo(({ children, bgColor='bg-white' }: { children: ReactNode, bgColor?: string }) => {
  const insets = useSafeAreaInsets();
  const containerStyle = {
    paddingLeft: insets.left === 0 ? 16 : insets.left,
    paddingRight: insets.right === 0 ? 16 : insets.right,
  };
  return (
    <View
      style={containerStyle}
      className="pb-4 rounded-bl-[40px] bg-main-2 gap-4 relative"
    >
      {children}
      <View className="w-8 h-8 bg-main-2 right-0 absolute -bottom-8">
        <View className={`w-16 h-16 ${bgColor} absolute top-0 right-0 rounded-full`} />
      </View>
    </View>
  );
});

const BodyWrapper = memo(({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();
  const containerStyle = {
    paddingLeft: insets.left === 0 ? 16 : insets.left,
    paddingRight: insets.right === 0 ? 16 : insets.right,
  };
  return (
    <View style={containerStyle} className="rounded-tr-3xl pt-5 pb-28 gap-5">
      {children}
    </View>
  );
});

export { HeroWrapper, BodyWrapper };
