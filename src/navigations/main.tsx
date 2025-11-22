import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import Screen */
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { View } from 'react-native';
import NavigationBar from '../components/ui/NavigationBar';
import { MainStackParamList } from '../types/navigation';
import SmartScreen from '@/screens/SmartScreen';
import UsageScreen from '@/screens/UsageScreen';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => (
  <View className="flex-1">
    <MainStack.Navigator
      screenOptions={{ headerShown: false, animation: 'none' }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Smart" component={SmartScreen}/>
      <MainStack.Screen name="Usage" component={UsageScreen}/>
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
    <NavigationBar />
  </View>
);

export default Main;
