import {createContext, useContext, useEffect, useState} from "react";
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from "firebase/auth";
WebBrowser.maybeCompleteAuthSession();
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1098573125767-unmi5m9ocqcfa1c6qgt0mtjjd44q9aev.apps.googleusercontent.com',
    webClientId: '561045713412-m6bu8jtcdv4h6a0momi6rd69qea3o5ku.apps.googleusercontent.com',
    iosClientId: '',
    androidClientId: '1098573125767-qshhu4istd79chldtrm365hilhecpnq0.apps.googleusercontent.com',
  })

  // const checkLocalUser = async () => {
  //   try {
  //     const userJSON = await AsyncStorage.getItem('@user');
  //     const userData = userJSON ? JSON.parse(userJSON) : null;
  //
  //     console.log("local storage", userData);
  //
  //     setUser(userData);
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }

  useEffect(() => {
    if(response?.type === "success") {
      const {id_token} = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
    }
  }, [response])

  useEffect(() => {
    // checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // await AsyncStorage.setItem('@user', JSON.stringify(user));
      }
    })

    return () => unsub();
  }, [])

  return (
    <AuthContext.Provider value={{user: user, promptAsync: promptAsync}}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);
}