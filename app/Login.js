import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Wrapper from "../components/Wrapper";
import { useRouter } from "expo-router";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";

const Login = () => {
  const image = require('../assets/logo.png');
  const router = useRouter();

  const { user, promptAsync } = useAuth();

  useEffect(() => {
    if(user) {
      router.push("/Profile");
    }
  }, [user])

  return (
    <Wrapper>
      <View style={styles.loginButtons}>
        <Text style={styles.loginTitle}>
          Zaloguj się
        </Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
         <Text style={styles.loginButtonText}>
           Zaloguj się przez Facebook
         </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => promptAsync()}>
          <Text style={styles.loginButtonText}>Zaloguj się przez Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
          <Text style={styles.loginButtonText}>Zaloguj się przez Apple</Text>
        </TouchableOpacity>
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
  loginTitle: {
    fontSize: 36,
    marginBottom: 30,
    fontFamily: 'Caveat'
  },
  registerInfo: {
    borderRadius: 30,
    backgroundColor: '#D0D2D8',
    padding: 15,
  },
  registerInfoHeader: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Caveat',
    fontSize: 32,
  },
  registerInfoText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'CalibriRegular'
  },
  loginButton: {
    backgroundColor: '#7F7F7F',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    paddingLeft: 50,
  },
  loginButtonText: {
    color: '#FFC400',
    fontSize: 22,
    fontFamily: 'CalibriRegular'
  }
})

export default Login