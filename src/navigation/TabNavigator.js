import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import ProfileScreen from "../screens/ProfileScreen";
import StackNavigation from "./StackNavigation";
import ApplyScreen from "../screens/ApplyScreen";





const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Apply") {
              iconName = focused ? "navigate" : "navigate-outline";
            }
            else if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#751a93"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Home" component={StackNavigation} />
        <Tab.Screen name="Apply" component={ApplyScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };




  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#ffffff",
      height: "8%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
  
  export default BottomTabNavigator;