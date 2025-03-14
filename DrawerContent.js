import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

const DrawerList = [
    {icon: 'home-outline', label: 'Home', navigateTo:'Home'},
    {icon: 'account-multiple', label: 'Profile', navigateTo:'Profile'},
    {icon: 'account-group', label: 'User', navigateTo:'User'},
    {icon: 'bookshelf', label: 'Flex', navigateTo:'Flex'},
];

const DrawerLayout=({icon, label, navigateTo}) => {
    const navigation= useNavigation();
    return (
        <DrawerItem
            icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
            label={label}
            onPress={() => navigation.navigate(navigateTo)}
        />
    );
};

const DrawerItems = props => {
    return DrawerList.map((el,i) => {
        return (
            <DrawerLayout
            key={i}
            icon={el.icon}
            label={el.label}
            navigateTo={el.navigateTo}/>
        );
    });
}

function DrawerContent(props) {
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image
                                    source={require("./assests/images/user-login.png")}
                                    size={50}
                                    style={{marginTop: 5}}
                                />
                                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                                    <Title style={styles.title}>Nivedha Deepak</Title>
                                    <Text style={styles.caption} numberOfLines={1}>nivedhadevi@syngrid.com</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.drawerSection}>
                        <DrawerItems {...props}/>
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon= {({color,size}) => (
                    <Icon name="exit-to-app" color={color} size={size}/>
                )}
                label="Sign Out"
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    caption: {
        fontSize: 14,
        color: "#666",
    },
    bottomDrawerSection: {
        paddingLeft: 20,
    }
});


export default DrawerContent;