import React from "react";
import { StyleSheet,View, Text, Button } from "react-native";

function HomeScreen(props) {
    console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>React Native</Text>
      <Text style={styles.textStyle}>This is home screen</Text>
      <Button title="Profile" onPress={() => props.navigation.navigate('Profile',{name: "Nivedha"})}/>
    </View>
  );
}
const styles=StyleSheet.create({
    viewStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle:{
        fontSize: 28,
        color: 'blue',
    },
    headingStyle:{
        fontSize: 38,
        color: 'black',
        textAlign: 'center',
    }
})
export default HomeScreen;