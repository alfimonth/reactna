import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import StatusBar from '@/components/ui/StatusBar';
import { BodyWrapper, HeroWrapper } from '@/components/layouts/wrapper';
import icons from '@/data/icon';
import HeaderSection from '@/components/ui/HeaderSection';
import Placeholder from '@/components/Placeholder';
import Divider from '@/components/ui/Divider';
import DATA from '@/data/index.json';

type SmartCardProps = {
  name: string;
  room: string;
  isActive: boolean;
};

const SmartScreen = () => {
  const data = DATA.smarts;
  return (
    <View className="bg-surface-2 flex-1">
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroWrapper bgColor="bg-surface-2">
          {/* TopBar */}
          <View className="gap-4 justify-between items-center flex-row  py-1">
            <View className="flex-1 gap-1">
              <Text className="text-white text-heading-2/semibold">
                Smart Home
              </Text>
            </View>
            <TouchableOpacity className="bg-white rounded-full p-2">
              <icons.filter />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-surface-2 rounded-2xl border-netral border-[1.5px] p-[18px] gap-[9px] flex-row items-center">
            <Text className="flex-1 text-body-2/semibold">Living Room</Text>
            <icons.dropdown />
          </TouchableOpacity>
        </HeroWrapper>
        <BodyWrapper>
          <Smarts data={data} />
          {/* Next Improve: adjust dash long */}
          <TouchableOpacity className="p-[18px] px-0 bg-white items-center rounded-lg border-[3px] border-dashed border-main-2">
            <Text className="text-netral text-body-3/semibold">
              Add New Smart Mode
            </Text>
          </TouchableOpacity>
        </BodyWrapper>
      </ScrollView>
    </View>
  );
};

const Smarts = ({ data }: { data: SmartCardProps[] }) => (
  <>
    <HeaderSection title="Smart Mode" count={4} />
    <View className="gap-2">
      {data.map((smart, _) => (
        <SmartCard {...smart} key={_} />
      ))}
    </View>
  </>
);

const SmartCard = ({ name, room, isActive }: SmartCardProps) => (
  <View className="px-5 pt-[10px] pb-2 py-96 bg-white rounded-2xl gap-[6px]">
    {/* Head */}
    <View className="flex-row items-center">
      <View className="flex-1 gap-[6px]">
        <Text className="text-netral text-body-3/semibold">{name}</Text>
        <View className="flex-row gap-2">
          <Text className="text-netral text-caption-1/regular">{room}</Text>
          <Divider />
          <View className="flex-row gap-1">
            <Text className="text-netral text-caption-1/regular">Tue</Text>
            <Text className="text-netral text-caption-1/regular">Thu</Text>
          </View>
        </View>
      </View>
      {isActive ? <icons.on /> : <icons.off />}
    </View>

    {/* Body */}
    <View className="flex-row gap-4 items-center">
      <Placeholder s={40} />
      <View className="gap-4 flex-row justify-between flex-1 h-full">
        <View className="flex-1 items-start py-[10px]">
          <Text className="text-netral text-caption-1/regular">from</Text>
          <Text className="text-netral text-body-3/semibold">8 pm</Text>
        </View>
        <Divider />
        <View className="flex-1 items-end py-[10px]">
          <Text className="text-netral text-caption-1/regular">to</Text>
          <Text className="text-netral text-body-3/semibold">8 pm</Text>
        </View>
        <Divider />
        <View className="justify-between">
          <TouchableOpacity className="p-1 rounded elevation-sm bg-white">
            <icons.delete width={16} height={16} />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 rounded elevation-sm bg-white">
            <icons.edit width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default SmartScreen;
