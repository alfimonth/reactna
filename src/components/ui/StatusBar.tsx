import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const StatusBar = () => {
  const insets = useSafeAreaInsets();
  return <View style={{ height: insets.top }} className="bg-main-2" />;
};

export default StatusBar;
