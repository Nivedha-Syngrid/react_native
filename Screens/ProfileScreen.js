import React from "react";
import { StyleSheet,View, Text, Button } from "react-native";

function ProfileScreen(props) {
    console.log(props);
  return (
      <View style={styles.viewStyle}>
        {/* <Text style={styles.textStyle}>This is Profile screen: {props.route.params.name}</Text> */}
        <Text style={styles.textStyle}>This is Profile screen</Text>
        <Button title="User" onPress={() => props.navigation.navigate('User')}/>
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
export default ProfileScreen;