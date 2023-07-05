import {StyleSheet, View, Image} from "react-native";
import { Stack } from 'expo-router';
import image from "../assets/logo.png";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";

SplashScreen.preventAutoHideAsync();
const Wrapper = ({children, logo = true}) => {
  const [fontsLoaded] = useFonts({
    'Caveat': require('../assets/fonts/CaveatBrush-Regular.ttf'),
    'CalibriRegular': require('../assets/fonts/CalibriRegular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{
        headerShown: false
      }}/>
      <View style={styles.wrapper}>
        {logo &&
          <Image source={image} style={styles.logo}/>
        }
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 40,
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 100,
    marginHorizontal: 'auto',
    marginBottom: 30,
  },
});
export default Wrapper;