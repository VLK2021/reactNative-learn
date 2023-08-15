import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from "react-native";


const UserDetails = ({route, navigation}) => {
    const {params:{data}} = route;


    useEffect(() => {
        navigation.setOptions({title: data.name});
    }, []);


    return (
        <View>
            <Text>{data.id}</Text>
            <Text>{data.name}</Text>
            <Text>{data.email}</Text>
        </View>
    )
};

export default UserDetails;

let styles = StyleSheet.create({});