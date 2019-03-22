
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <TextInput 
          style={styles.input}
          placeholder="Username"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
             style={styles.userBtn}
             onPress={() => alert("Login!")} 
          >
            <Text style={styles.btnTxt}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.userBtn} 
            onPress={() => alert("Signup!")} 

          >
            <Text style={styles.btnTxt}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  btnContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    width: "90%"
  },
  userBtn: {
    backgroundColor: "yellow",
    padding: 10,
    width: "45%"
  },
  btnTxt: {
    fontSize: 15,
    textAlign: "center"
  }


});
