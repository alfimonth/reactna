import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Placeholder from '@/components/Placeholder';
import DATA from '@/data/index.json';
import { DetailProps } from '@/types/home';
import icons from '@/data/icon';
import { BodyWrapper, HeroWrapper } from '@/components/layouts/wrapper';
import StatusBar from '@/components/ui/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Rooms from '@/components/sections/Rooms';
import Actives from '@/components/sections/Actives';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const data = DATA.home;

  return (
    <View className="bg-white flex-1">
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroWrapper>
          {/* TopBar */}
          <View className="gap-4 justify-between items-center flex-row px-2 py-1">
            <View className="flex-1 gap-1">
              <Text className="text-white text-heading-2/semibold">
                Good Morning,
              </Text>
              <Text className="text-netral text-body-3/regular">
                Ridzwan Gigih
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Splash');
              }}
              className="bg-white rounded-full p-2"
            >
              <icons.notif />
            </TouchableOpacity>
          </View>

          {/* MainHeader */}
          <View className="bg-surface-2 rounded-[28px] p-[18px] gap-[9px]">
            <View className="flex-row justify-between items-center gap-3 pb-[9px] border-b-[0.3px] border-b-main-2">
              <Placeholder />
              <View className="flex-1 gap-2">
                <Text className="text-caption-1/regular">
                  Nov 19, 2025 10:00 pm
                </Text>
                <Text className="text-body-1/semibold text-netral">Cloudy</Text>
                <Text className="text-caption-1/regular text-netral">
                  Sumurboto, Semarang
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-[40px] tracking-wider font-poppins-regular text-netral pr-1">
                  19
                </Text>
                {/* <Text>O</Text> */}
                <Text className="text-[30px] tracking-wider text-netral font-poppins-semibold">
                  C
                </Text>
              </View>
            </View>
            <Details details={data.details} />
          </View>
        </HeroWrapper>
        <BodyWrapper>
          <Rooms
            rooms={data.rooms.slice(0, 2)}
            onSeeAll={() => navigation.navigate('Rooms')}
          />
          <Actives
            actives={data.actives.slice(0, 2)}
            onSeeAll={() => navigation.navigate('Actives')}
          />
        </BodyWrapper>
      </ScrollView>
    </View>
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
  ({ title = '...', value = '0', unit = '-', icon }: DetailProps) => {
    const Icon = icons[icon as string];

    return (
      <TouchableOpacity className="py-[6px] flex-1 bg-white/30 rounded-lg items-center gap-1 ">
        <View className="flex-1 flex-row gap-1 items-center">
          <View className="p-1 bg-white rounded-full">
            <Icon />
          </View>
          <View className="flex-row gap-[2px] items-baseline">
            <Text className="text-body-1/semibold text-netral">{value}</Text>
            <Text className="text-caption-1/semibold text-netral">{unit}</Text>
          </View>
        </View>
        <Text className="text-caption-1/regular text-netral">{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default HomeScreen;
