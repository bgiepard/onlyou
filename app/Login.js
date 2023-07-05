import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Wrapper from "../components/Wrapper";
import { useRouter } from "expo-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const image = require('../assets/logo.png');
  const router = useRouter();

  const { user } = useAuth();

  return (
    <Wrapper>
      <Image source={image} style={styles.logo}/>

      <Text>
        Zaloguj się { user }
      </Text>

      <View style={styles.loginButtons}>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
          Zaloguj się przez Facebook</TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
          Zaloguj się przez Google</TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
          Zaloguj się przez Apple</TouchableOpacity>
      </View>
      <View style={styles.registerInfo}>
        <Text style={styles.registerInfoHeader}>
          Pamiętaj!
        </Text>
        <Text style={styles.registerInfoText}>
          Logując się, akceptujesz nasz Regulamin.
          Informacje na temat sposobu, w jaki wykorzystujemy Twoje dane, znajdziesz w naszej Polityce Prywatności.
        </Text>
      </View>
    </Wrapper>
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
  loginButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerInfo: {
    borderRadius: 25,
    backgroundColor: '#eee',
    padding: 10,
  },
  registerInfoHeader: {
    textAlign: 'center'
  },
  registerInfoText: {

  },
  loginButton: {
    backgroundColor: '#eee',
    marginBottom: 20,
    padding: 10,
  }
})

export default Login