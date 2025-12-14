import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// svg
import Home from '@/assets/icons/home.svg';
import HomeFill from '@/assets/icons/home-fill.svg';
import Net from '@/assets/icons/net.svg';
import NetFill from '@/assets/icons/net-fill.svg';
import Pie from '@/assets/icons/pie.svg';
import PieFill from '@/assets/icons/pie-fill.svg';
import User from '@/assets/icons/user.svg';
import UserFill from '@/assets/icons/user-fill.svg';

type NavButtonProps = {
  text?: string;
  onPress?: () => void;
  isActive?: boolean;
  icon: ReactNode;
  iconActive?: ReactNode;
};

const NavigationBar = () => {
  const navigation = useNavigation<any>();

  const insets = useSafeAreaInsets();
  const currentRoute = useNavigationState(state => {
    const main = state.routes[state.index];

    if (!main.state || typeof main.state.index !== 'number') {
      return main.name;
    }

    const nestedIndex = main.state.index;
    const nested = main.state.routes[nestedIndex];

    return nested.name;
  });

  const routeName = currentRoute === 'Main' ? 'Home' : currentRoute;

  return (
    <View
      style={{ height: 64 + insets.bottom }}
      className="absolute bottom-0 left-0 right-0 bg-main-2 items-start rounded-t-2xl"
    >
      <View className="flex-row items-center gap-[6px] p-4">
        <NavButton
          text="Home"
          icon={<Home />}
          iconActive={<HomeFill />}
          isActive={routeName === 'Home'}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}
        />
        <NavButton
          text="Smart"
          icon={<Net />}
          iconActive={<NetFill />}
          isActive={currentRoute === 'Smart'}
          onPress={() => navigation.navigate('Main', { screen: 'Smart' })}
        />
        <NavButton
          text="Usage"
          icon={<Pie />}
          iconActive={<PieFill />}
          isActive={currentRoute === 'Usage'}
          onPress={() => navigation.navigate('Main', { screen: 'Usage' })}
        />
        <NavButton
          text="Profile"
          icon={<User />}
          iconActive={<UserFill />}
          isActive={currentRoute === 'Profile'}
          onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
        />
      </View>
    </View>
  );
};

const NavButton = ({
  text = '...',
  icon,
  iconActive,
  onPress,
  isActive = false,
}: NavButtonProps) => {
  const flexValue = useSharedValue(1); // selalu mulai dari 1

  useEffect(() => {
    flexValue.value = withTiming(isActive ? 2 : 1, { duration: 300 });
  }, [flexValue, isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    flex: flexValue.value,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        onPress={onPress}
        className="h-14 justify-center items-center bg-white rounded-lg flex-row gap-2 px-4"
      >
        {isActive ? iconActive : icon}
        {isActive && <Text>{text}</Text>}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default NavigationBar;
