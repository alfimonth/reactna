import { BodyWrapper, HeroWrapper } from '@/components/layouts/wrapper';
import Back from '@/components/ui/Back';
import StatusBar from '@/components/ui/StatusBar';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import icons from '@/data/icon';
import DATA from '@/data/index.json';
import Actives from '@/components/sections/Actives';

const ActivesScreen = () => {
  const data = DATA.home.actives;
  return (
    <View className="flex-1 bg-white">
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroWrapper>
          {/* TopBar */}
          <View className="gap-4 justify-between items-center flex-row  py-1">
            <Back />
            <View className="">
              <Text className="text-white text-heading-2/semibold">
                Devices Active
              </Text>
            </View>
            <TouchableOpacity className="bg-white rounded-full p-2">
              <icons.search />
            </TouchableOpacity>
          </View>
        </HeroWrapper>
        <BodyWrapper>
          <Actives
            label="Device Active"
            actives={data}
            // count={data.rooms.length}
            // rightComp={
            //   <TouchableOpacity className="elevation-sm bg-white p-[6px] rounded-lg mb-4">
            //     <icons.add width={20} height={20} />
            //   </TouchableOpacity>
            // }
          />
          <TouchableOpacity className="p-[18px] px-0 bg-border items-center rounded-lg elevation-sm">
            <Text className="text-white text-body-2/semibold">
              Turn Off All devices
            </Text>
          </TouchableOpacity>
        </BodyWrapper>
      </ScrollView>
    </View>
  );
};

export default ActivesScreen;
