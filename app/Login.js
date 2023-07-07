import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Wrapper from "../components/Wrapper";
import {Link, useRouter} from "expo-router";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";
import google from "../assets/google.png";

const Login = () => {
  const image = require('../assets/logo.png');
  const fb = require('../assets/fb.png');
  const google = require('../assets/google.png');
  const apple = require('../assets/apple.png');
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
          <Image source={fb} style={{width: 40, height: 40}}/>
         <Text style={styles.loginButtonText}>
           Zaloguj się przez Facebook
         </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => promptAsync()}>
          <Image source={google} style={{width: 40, height: 40}}/>
          <Text style={styles.loginButtonText}>Zaloguj się przez Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => {
          router.push("/Profile");
        }}>
          <Image source={apple} style={{width: 35, height: 40}}/>
          <Text style={styles.loginButtonText}>Zaloguj się przez Apple</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.registerInfo}>
        <Text style={styles.registerInfoHeader}>
          Pamiętaj!
        </Text>
        <Text style={styles.registerInfoText}>
          Logując się, akceptujesz nasz <Link href="Profile"><Text style={styles.footerLink}>Regulamin</Text></Link>.
          Informacje na temat sposobu, w jaki wykorzystujemy Twoje dane, znajdziesz w naszej <Link href="/Profile" style={styles.footerLink}><Text  style={styles.footerLink}>Polityce Prywatności</Text></Link>.
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
    alignItems: 'center',
    width: '80%'
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
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    width: '100%'
  },
  loginButtonText: {
    color: '#FFC400',
    fontSize: 22,
    fontFamily: 'CalibriRegular'
  },
  footerLink: {
    // borderBottomColor: 'black',
    // borderBottomWidth: 2,
    // borderBottom: '1px solid black'
    textDecorationLine: 'underline'
  }
})

export default Login