import { BodyWrapper, HeroWrapper } from '@/components/layouts/wrapper';
import StatusBar from '@/components/ui/StatusBar';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import icons from '@/data/icon';
import Rooms from '@/components/sections/Rooms';
import DATA from '@/data/index.json';
import Back from '@/components/ui/Back';

const RoomsScreen = () => {
  const data = DATA.home;
  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroWrapper>
          {/* TopBar */}
          <View className="gap-4 justify-between items-center flex-row  py-1">
            <Back />
            <View className="">
              <Text className="text-white text-heading-2/semibold">Room</Text>
            </View>
            <TouchableOpacity className="bg-white rounded-full p-2">
              <icons.search />
            </TouchableOpacity>
          </View>
        </HeroWrapper>
        <BodyWrapper>
          <Rooms
            rooms={data.rooms}
            label="Your Rooms"
            count={data.rooms.length}
            rightComp={
              <TouchableOpacity className="elevation-sm bg-white p-[6px] rounded-lg mb-4">
                <icons.add width={20} height={20} />
              </TouchableOpacity>
            }
          />
        </BodyWrapper>
      </ScrollView>
    </View>
  );
};

export default RoomsScreen;
