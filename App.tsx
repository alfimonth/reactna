import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import { useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-white justify-center items-center gap-12">
        <Text className="text-blue-400 text-3xl">Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
