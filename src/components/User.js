import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


const User = (props) => {
    const {item, nav} = props;


    return (
        <View style={[styles.box]}>
            <Text>name: {item.name}</Text>
            <Text>email: {item.email}</Text>

            <Button title={'user details'} onPress={() => {
                nav.navigate('UserDetails', {data: item})
            }}/>
        </View>
    )
};

export default User;


let styles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 3
    }
});