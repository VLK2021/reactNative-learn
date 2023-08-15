import React from 'react';
import {StyleSheet, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";


import Users from "./src/components/Users";
import UserDetails from "./src/components/UserDetails";


let Stack = createNativeStackNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Users'} component={Users}/>
                <Stack.Screen name={'UserDetails'} component={UserDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
