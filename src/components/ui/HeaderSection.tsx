import { memo, ReactNode } from 'react';
import { Text, View } from 'react-native';

const HeaderSection = memo(
  ({
    title = '...',
    onSeeAll,
    count,
    rightComp,
  }: {
    title?: string;
    onSeeAll?: () => void;
    count?: number;
    rightComp?: ReactNode;
  }) => (
    <View className="justify-between flex-row items-baseline">
      <View className="flex-row gap-1 items-end">
        <Text className="text-netral text-body-1/semibold">{title}</Text>
        {count && (
          <View className="bg-main-2 rounded px-[6px] py-1 ">
            <Text className="text-white text-body-3/semibold">{count}</Text>
          </View>
        )}
      </View>
      {onSeeAll ? (
        <Text onPress={onSeeAll} className="text-main-2 text-body-2/semibold">
          See All
        </Text>
      ) : (
        rightComp 
      )}
    </View>
  ),
);

export default HeaderSection;
