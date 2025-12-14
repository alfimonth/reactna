import { ActiveCardProps } from '@/types/home';
import { memo } from 'react';
import { Text, View } from 'react-native';
import HeaderSection from '../ui/HeaderSection';
import Placeholder from '../Placeholder';
import icons from '@/data/icon';

type ActivesProps = {
  actives: ActiveCardProps[];
  onSeeAll?: () => void;
  label?: string;
};

const Actives = memo(
  ({ actives, onSeeAll, label = 'Active' }: ActivesProps) => (
    <View className="gap-2">
      <HeaderSection count={6} title={label} onSeeAll={onSeeAll} />
      <View className="flex-row gap-2 justify-between flex-wrap">
        {actives.map((active, _) => (
          <ActiveCard {...active} key={_} />
        ))}
      </View>
    </View>
  ),
);

const ActiveCard = memo(({ name, room, details }: ActiveCardProps) => (
  <View className="bg-border w-[48%] rounded-2xl px-3 pb-4 gap-4 elevation-md">
    <View className="flex-row justify-end items-center min-h-[75px] relative">
      <Placeholder s={75} className="absolute left-0" />
      <View className="gap-[2px] items-end">
        <Text className="text-white text-caption-1/regular">
          {details.title}
        </Text>

        {details.type === 'temp' && (
          <View className="flex-row gap-[2px] items-baseline">
            <Text className="text-white text-body-1/semibold">
              {details.value}
            </Text>
            <Text className="text-white text-caption-1/regular">C</Text>
          </View>
        )}

        {details.type === 'text' && (
          <Text numberOfLines={1} className="text-white text-body-1/semibold">
            {details.value}
          </Text>
        )}
      </View>
    </View>
    <View className="flex-row items-end">
      <View className="flex-1 gap-1">
        <Text className="text-white text-body-1/semibold">{name}</Text>
        <Text className="text-caption-1/regular text-white">{room}</Text>
      </View>
      <icons.off />
    </View>
  </View>
));

export default Actives;
