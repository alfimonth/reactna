import { View } from 'react-native';
import React from 'react';

const Placeholder = ({
  s = 60,
  className,
}: {
  s?: number;
  className?: string;
}) => (
  <View
    style={{ width: s, height: s }}
    className={`bg-blue-400 opacity-50 ${className}`}
  />
);

export default Placeholder;
