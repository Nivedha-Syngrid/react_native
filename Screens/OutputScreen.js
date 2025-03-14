import React from "react";
import { StyleSheet,View, Text, Button } from "react-native";

const OutputScreen = ({email, passwd, currency, slideval, radiobtn, chkbtn}) => {
    return (
        <View>
            <Text> This is OutputScreen</Text>
            <Text> Email: {email}</Text>
            <Text> Password: {passwd}</Text>
            <Text> Selected Currency: {currency}</Text>
            <Text> Team Performance: {slideval}%</Text>
            <Text>Radiobutton: {radiobtn}</Text>
            <Text>Checkbox: {chkbtn}</Text>
        </View>
    );
};

export default OutputScreen;