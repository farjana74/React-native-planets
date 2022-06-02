import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { colors } from './src/theme/colors';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
import {

  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { typography } from './src/theme/typography';
import Home from './src/screens/home';
import Details from './src/screens/details';




export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
  });

  //


  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer >
      {/* <StatusBar style='light' /> */}
    </>






  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
