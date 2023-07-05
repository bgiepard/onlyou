import Wrapper from "../components/Wrapper";
import {useState} from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);

  if(!user) {
    return <Login/>
  }
  return (
    <Wrapper>
      <View style={styles.homeIcons}>
        <View style={styles.homeIconsRow}>
          <TouchableOpacity style={styles.homeIcon}>1</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>2</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>3</TouchableOpacity>
        </View>

        <View style={styles.homeIconsRow}>
          <TouchableOpacity style={styles.homeIcon}>4</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>5</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>6</TouchableOpacity>
        </View>

        <View style={styles.homeIconsRow}>
          <TouchableOpacity style={styles.homeIcon}>7</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>8</TouchableOpacity>
          <TouchableOpacity style={styles.homeIcon}>9</TouchableOpacity>
        </View>
      </View>
      <View>
        Filters
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  homeIcons: {
    flex: 1,
    gap: 10,
    padding: 25,
  },
  homeIconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  homeIcon: {
    border: '2px solid red',
    padding: 15,
    borderRadius: 20,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;