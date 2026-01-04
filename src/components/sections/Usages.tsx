import { View, Text } from 'react-native';
import HeaderSection from '../ui/HeaderSection';
import Placeholder from '../Placeholder';
import { UsageProps, UsagesProps } from '@/types/usage';
import { memo } from 'react';
import Divider from '../ui/Divider';
import icons from '@/data/icon';

const Usages = memo(({ onSeeAll, usages }: UsagesProps) => (
  <View className="gap-2">
    <HeaderSection title="Total Today" onSeeAll={onSeeAll} count={4} />
    <View className="flex-row gap-3 justify-between flex-wrap">
      {usages.map((usage, _) => (
        <UsageCard key={_} {...usage} />
      ))}
    </View>
  </View>
));

const UsageCard = memo(
  ({ name, usage, usageTime, units, percentage }: UsageProps) => (
    <View className="bg-surface-2 rounded-2xl p-4 w-full flex-row">
      <View className="p-2 rounded-full bg-white aspect-square mr-5">
        <Placeholder s={40} />
      </View>
      <View className="flex-1 gap-1">
        <Text className="text-body-3/semibold">{name}</Text>
        <Text className="text-caption-1/regular">Kitchen - Bedroom</Text>
        <View className="flex-row gap-2">
          <Text className="text-caption-1/regular text-gray">{units} Unit</Text>
          <Divider color='bg-gray' />
          <Text className="text-caption-1/regular text-gray">{usageTime} Jam</Text>
        </View>
      </View>
      <View className="items-end gap-[2px]">
        <View className="flex-row gap-1">
          <Text className="text-body-3/semibold text-main-2">{usage}</Text>
          <Text className="text-body-3/regular text-main-2">Kw/h</Text>
        </View>
        <View className="flex-row gap-1 items-center">
          {percentage >= 0 ? (
            <icons.up width={14} height={14} />
          ) : (
            <icons.down width={14} height={14} fill="#9A7265" />
          )}
          <Text
            className={`text-caption-1/regular ${
              percentage >= 0 ? 'text-main-3' : 'text-border'
            } `}
          >
            {percentage}%
          </Text>
        </View>
      </View>
    </View>
  ),
);

export default Usages;
