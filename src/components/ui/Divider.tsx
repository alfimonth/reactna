import { View } from 'react-native';

const Divider = ({ color }: { color?: string }) => (
  <View className={`h-full w-[.3px] ${color ? color : 'bg-netral'}`} />
);

export default Divider;
