import { RoomProps } from '@/types/home';
import { memo, ReactNode } from 'react';
import { Text, View } from 'react-native';
import HeaderSection from '../ui/HeaderSection';
import Placeholder from '../Placeholder';

type RoomsProps = {
  rooms: RoomProps[];
  onSeeAll?: () => void;
  label?: string;
  count?: number;
  rightComp?: ReactNode;
};

const Rooms = memo(
  ({ rooms, onSeeAll, label = 'Rooms', count, rightComp }: RoomsProps) => (
    <View className="gap-2">
      <HeaderSection
        title={label}
        onSeeAll={onSeeAll}
        count={count}
        rightComp={rightComp}
      />
      <View className="flex-row gap-3 justify-between flex-wrap">
        {rooms.map((room, _) => (
          <RoomCard key={_} {...room} />
        ))}
      </View>
    </View>
  ),
);

const RoomCard = memo(
  ({ name = '...', temperatur = 0, totalDevices = 0 }: RoomProps) => (
    <View className="bg-surface-2 w-[48%] rounded-2xl elevation-md mb-3">
      <View className="py-[14px] px-4">
        <View className="flex-row bg-main-2 self-start rounded-[6px] px-[10px] pb-1 pt-[5px] items-baseline gap-1">
          <Text className="text-white text-body-3/semibold">{temperatur}</Text>
          {/* <Text>*</Text> */}
          <Text className="text-white text-caption-1/regular">C</Text>
        </View>
        <View className="items-center gap-1">
          <Placeholder s={100} />
          <Text className="text-netral text-body-1/semibold">{name}</Text>
          <View className="flex-row gap-[2px] items-center">
            <View className="bg-[#FFE266] p-1 rounded">
              <Text className="text-netral text-caption-1/semibold">
                {totalDevices}
              </Text>
            </View>
            <Text className="text-netral text-caption-1/regular">devices</Text>
          </View>
        </View>
      </View>
    </View>
  ),
);

export default Rooms;
