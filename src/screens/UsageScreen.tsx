import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import StatusBar from '@/components/ui/StatusBar';
import { BodyWrapper, HeroWrapper } from '@/components/layouts/wrapper';
import icons from '@/data/icon';
import UsageDiagram from '@/components/sections/UsageDiagram';
import Usages from '@/components/sections/Usages';
import DATA from '@/data/index.json';

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
        <BodyWrapper>
          <Usages onSeeAll={() => {}} usages={DATA.usages} />
        </BodyWrapper>
      </ScrollView>
    </View>
  );
};

export default UsageScreen;
