import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Users from "./src/components/Users";
import PostDrawer from "./src/components/PostDrawer";


let BottomTabNavigator = createBottomTabNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name={'users'} component={Users}/>
                <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
