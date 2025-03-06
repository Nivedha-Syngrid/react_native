import React from "react";
import 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation, DrawerActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Iconi from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/Entypo'; 
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import UserScreen from "./Screens/UserScreen";
import DrawerContent from "./DrawerContent";

 const StackNav=() => {
  const Stack= createNativeStackNavigator();
  const navigation=useNavigation();
  return(
    <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          statusBarColor: "#0163d2",
          headerStyle: {
            backgroundColor: "#0163d2",
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerLeft:() => {
            return(
              <Icon
              name= "menu" 
              size={30} 
              color="#fff"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            );
          }
        }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="User" component={UserScreen} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0163d2",
          }}} />
    </Stack.Navigator>
  );
}

const UserStackNav = () => {
  const UserStack=createNativeStackNavigator();
  return (
    <UserStack.Navigator screenOptions={{
      statusBarColor : "#0163d2",
      headerStyle: {
        backgroundColor: "#0163d2"
      },
      headerTintColor : "#fff",
      headerTitleAlign: "center",
    }}>
      <UserStack.Screen name="User" component={UserScreen} />
    </UserStack.Navigator>
  );
}

const TabNav = () => {
  const TabNav=createBottomTabNavigator();
  const tabConfig=[
    {
      name: "Home",
      component: StackNav,
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
      iconComponent: Iconi,
    },
    {
      name: "User",
      component: UserStackNav,
      focusedIcon: 'user',
      unfocusedIcon: 'user-o',
      iconComponent: FontAwesome,
    },
  ]
  const screenOptions= ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig= tabConfig.find(config => config.name == route.name);
      const iconName= focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent= routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor:"#0163d2",
    tabBarInactiveTintColor:"black",

    tabBarLabelStyle: {
      fontSize: 14,
      paddingBottom: 5,
      fontWeight: 600,
    },
    tabBarStyle:{
      height: 60,
      paddingTop: 0
    },
    headerShown: false
  });
  return (
      <TabNav.Navigator screenOptions={screenOptions}>
        {tabConfig.map(routeConfig => (
          <TabNav.Screen
          key={routeConfig.name}
          name={routeConfig.name}
          component={routeConfig.component}     
          />
        ))}
      </TabNav.Navigator>
  );
}
const DrawerNav = () => {
  const Drawer=createDrawerNavigator();
  return (
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props}/>}
      screenOptions={{
      headerShown: false
    }}>
        <Drawer.Screen name="Home" component={TabNav} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <DrawerNav/>   
    </NavigationContainer>
  );
}

export default App;