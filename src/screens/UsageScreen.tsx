import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import StatusBar from '@/components/ui/StatusBar';
import { HeroWrapper } from '@/components/layouts/wrapper';
import icons from '@/data/icon';
import UsageDiagram from '@/components/sections/UsageDiagram';

const UsageScreen = () => {
  return (
    <View className="bg-white flex-1">
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroWrapper>
          {/* TopBar */}
          <View className="gap-4 justify-between items-center flex-row py-1">
            <View className="flex-1 gap-1">
              <Text className="text-white text-heading-2/semibold">
                Power Usage
              </Text>
            </View>
            <TouchableOpacity className="bg-white rounded-full p-2">
              <icons.filter />
            </TouchableOpacity>
          </View>

          {/*Stats*/}
          <UsageDiagram />
        </HeroWrapper>
        {/* <BodyWrapper>
          <Rooms
            rooms={data.rooms.slice(0, 2)}
            onSeeAll={() => navigation.navigate('Rooms')}
          />
          <Actives
            actives={data.actives.slice(0, 2)}
            onSeeAll={() => navigation.navigate('Actives')}
          />
        </BodyWrapper> */}
      </ScrollView>
    </View>
  );
};

export default UsageScreen;
