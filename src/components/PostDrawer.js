import React from 'react';
import {StyleSheet} from 'react-native';

import Posts from "./Posts";
import Template from "./Template";
import {createDrawerNavigator} from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();


const PostDrawer = () => {

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Posts" options={{title: 'Pos'}} component={Posts}/>
            <Drawer.Screen name="Template" options={{title: 'Temp'}} component={Template}/>
        </Drawer.Navigator>
    )
};

export default PostDrawer;


let styles = StyleSheet.create({});





