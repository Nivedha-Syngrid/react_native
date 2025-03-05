import React from "react";
import { StyleSheet,View, Text } from "react-native";

function UserScreen() {
  return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>This is User screen</Text>
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
export default UserScreen;