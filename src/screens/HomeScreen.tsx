import { View, Text, ScrollView } from 'react-native';
import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Placeholder from '../components/Placeholder';

type DetailProps = {
  title?: string;
  value?: string;
  unit?: string;
};

type RoomProps = {
  name?: string;
  temperatur?: number;
  totalDevices?: number;
};

const data = {
  details: [
    {
      title: 'Humidity',
      value: '97',
      unit: '%',
    },
    {
      title: 'Visibility',
      value: '7',
      unit: 'km',
    },
    {
      title: 'NE Wind',
      value: '3',
      unit: 'km/h',
    },
  ],
  rooms: [
    {
      name: 'Living Room',
      temperatur: 19,
      totalDevices: 5,
    },
    {
      name: 'Bedroom',
      temperatur: 12,
      totalDevices: 8,
    },
  ],
};

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-main-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white w-24 h-24 absolute top-[200px]" />
        <View className="px-4 pb-3 rounded-bl-[40px] bg-main-2 gap-4">
          <View className="gap-4 justify-between items-center flex-row px-2 py-1">
            <View className="flex-1">
              <Text className="text-white text-heading-2 font-semibold">
                Good Morning,
              </Text>
              <Text className="text-netral text-body-3">Ridzwan Gigih</Text>
            </View>
            <View className="w-10 h-10 bg-white rounded-full" />
          </View>
          <View className="bg-surface-2 rounded-[28px] p-[18px] gap-[9px]">
            <View className="flex-row justify-between items-center gap-3 pb-[9px] border-b-[0.3px] border-b-main-2">
              <Placeholder />
              <View className="flex-1">
                <Text>Nov 19, 2025 10:00 pm</Text>
                <Text>Cloudy</Text>
                <Text>Sumurboto, Semarang</Text>
              </View>
              <View className="flex-row">
                <Text>19</Text>
                <Text>O</Text>
                <Text>C</Text>
              </View>
            </View>
            <Details details={data.details} />
          </View>
        </View>
        <View className="bg-white rounded-tr-3xl px-4 pt-5 pb-24 gap-5">
          <Rooms rooms={data.rooms} />
          <View className="gap-2">
            <View className="justify-between flex-row">
              <Text className="text-netral">Active</Text>
              <Text className="text-netral">See All</Text>
            </View>
            <View className="grid flex-row gap-2 justify-between flex-wrap">
              <View className="h-[190px] bg-border flex-1 rounded-2xl"></View>
              <View className="h-[190px] bg-border flex-1 rounded-2xl"></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Details = memo(({ details }: { details: DetailProps[] }) => (
  <View className="flex-1 flex-row gap-2">
    {details.map((detail, _) => (
      <WeatherCard key={_} {...detail} />
    ))}
  </View>
));

const WeatherCard = memo(
  ({ title = '...', value = '0', unit = '-' }: DetailProps) => {
    console.log('rendered');
    return (
      <View className="h-[60px] py-[6px] flex-1 bg-white/30 rounded-lg items-center gap-1">
        <View className="flex-1 flex-row gap-1 items-center">
          <View className="w-8 h-8 bg-white rounded-full" />
          <Text>
            {value} {unit}
          </Text>
        </View>
        <Text>{title}</Text>
      </View>
    );
  },
);

const Rooms = memo(({ rooms }: { rooms: RoomProps[] }) => (
  <View className="gap-2">
    <View className="justify-between flex-row">
      <Text className="text-netral">Rooms</Text>
      <Text className="text-netral">See All</Text>
    </View>
    <View className="grid flex-row gap-2 justify-between flex-wrap">
      {rooms.map((room, _) => (
        <RoomCard key={_} {...room} />
      ))}
    </View>
  </View>
));

const RoomCard = memo(
  ({ name = '...', temperatur = 0, totalDevices = 0 }: RoomProps) => (
    <View className="bg-surface-2 flex-1 rounded-2xl">
      <View className="py-[14px] px-4">
        <View className="flex-row bg-main-2 self-start rounded-[6px] px-[10px] pb-1 pt-[5px]">
          <Text>{temperatur}</Text>
          <Text>*</Text>
          <Text>C</Text>
        </View>
        <View className="items-center gap-1">
          <Placeholder s={100} />
          <Text>{name}</Text>
          <View className="flex-row gap-[2px] items-center">
            <View className="bg-[#FFE266] p-1 rounded">
              <Text>{totalDevices}</Text>
            </View>
            <Text>devices</Text>
          </View>
        </View>
      </View>
    </View>
  ),
);

export default HomeScreen;
