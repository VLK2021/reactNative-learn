import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import Users from "./src/components/Users";
import UserDetails from "./src/components/UserDetails";


let StackNavigator = createStackNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
