import React from "react";
import {Button, Image, StyleSheet, Text, View} from "react-native";


const User = ({item}) => {
    return <View style={[styles.box, styles.item]}>
        <Image
            style={styles.tinyLogo}
            source={{
                uri: 'https://media.tproger.ru/uploads/2020/12/react-roadmap-2021-cover-icon-original.png'
            }}/>
        <Text>
            {item.name} - {item.age}
        </Text>
        <Button
            title={'some button'}
            onPress={() => console.log('press')}
        />
    </View>

};

export default User;

let styles = StyleSheet.create({
    box: {
        height: 200,
        width: '100%',
        marginBottom: 10
    },
    item: {
        backgroundColor: 'silver'
    },
    tinyLogo: {
        width: 50,
        height: 50
    }
});