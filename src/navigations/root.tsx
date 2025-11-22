import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import Screen */
import { RootStackParamList } from '../types/navigation';
import SplashScreen from '../screens/SplashScreen';
import Main from './main';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{ headerShown: false, animation: 'none' }}
    >
      <RootStack.Screen name="Main" component={Main} />
      <RootStack.Screen name="Splash" component={SplashScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Root;
