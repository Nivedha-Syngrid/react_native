import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';
import React, { useRef } from 'react';

    const HEADER_MAX_HEIGHT = 250;
    const HEADER_MIN_HEIGHT = 70;
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
    
    const ProfileScreen = () => {
      const scrollY = useRef(new Animated.Value(0)).current;
    
      const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp",
      });
    
      const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 0.5, 0],
        extrapolate: "clamp",
      });
   return (
      <View style={styles.container}>
        {/* Animated Header */}
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            source={require("../assests/images/parallax_img.jpg")}
            style={[styles.backgroundImage, { opacity: imageOpacity }]}
          />
          {/* Text Overlay */}
          <View style={styles.overlay}>
            <Text style={styles.title}>Welcome to Parallax</Text>
            <Text style={styles.subtitle}>Smooth scrolling effect with React Native</Text>
          </View>
        </Animated.View>
  
        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}>
            {/* Content below the parallax view */}
          <View style={styles.content}>
            {[1,2,3,4,5].map((item)=> (
                <Text key= {item} style={styles.text}>
                  This is a simple parallax scrolling effect using React Native's Animated API.
                  Scroll down to see the header resize dynamically.
                  Add more text here to make scrolling longer and see the effect better.
                </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
  const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      overflow: "hidden",
      backgroundColor: "#000",
    },
    backgroundImage: {
      width: "100%",
      height: HEADER_MAX_HEIGHT,
      resizeMode: "cover",
    },
    overlay: {
      position: "absolute",
      top: "50%",  // Center vertically
      left: "10%", // Adjust left margin
      right: "10%",
      transform: [{ translateY: -20 }],  // Adjust centering
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      color: "#ddd",
      textAlign: "center",
      marginTop: 5,
    },
    scrollContent: {
      paddingTop: HEADER_MAX_HEIGHT,
    },
    content: {
      padding: 20,
    },
    text: {
      fontSize: 16,
      color: "#333",
      marginBottom: 20,
    },
  })
export default ProfileScreen;