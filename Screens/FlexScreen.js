import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useRef } from 'react';


const FlexScreen = () => {
  const { container, textStyle, tileStyle }= styles;

  return (
        <ScrollView>
          {[1,2,3,4,5].map((item)=> (
            <View key={item} style={container}>
              <Text key= {item} style={textStyle}>Category {item}</Text>
              <ScrollView horizontal={true}>
                {[1,2,3,4,5].map((tile) => (
                  <View key={tile} style={tileStyle}>
                    <Text key={tile} style={textStyle}>Tile {tile}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>  
  );
};

const styles = StyleSheet.create({
  /*Scrollview horizontal container */
  container: {
    backgroundColor: "#ddd",
    marginBottom: 5,
    height:250,
    padding:20,
  },
  textStyle: {
    fontSize: 20,
    color: "#000"
  },
  tileStyle: {
    width: 200,
    height:200,
    backgroundColor:"#2f74f4",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default FlexScreen;

