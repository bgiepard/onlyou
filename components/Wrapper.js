import {StyleSheet, View, Image} from "react-native";
import { Stack } from 'expo-router';
import image from "../assets/logo.png";
const Wrapper = ({children, logo = true}) => {
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
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
  },
  logo: {
    width: 200,
    height: 100,
    marginHorizontal: 'auto',
    marginBottom: 30,
  },
});
export default Wrapper;