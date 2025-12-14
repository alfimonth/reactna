import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import Screen */
import { RootStackParamList } from '../types/navigation';
import SplashScreen from '../screens/SplashScreen';
import Main from './main';
import RoomsScreen from '@/screens/RoomsScreen';
import ActivesScreen from '@/screens/ActivesScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={Main} />
      <RootStack.Screen name="Splash" component={SplashScreen} />

      {/* Features */}
      <RootStack.Screen name="Rooms" component={RoomsScreen} />
      <RootStack.Screen name="Actives" component={ActivesScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Root;
