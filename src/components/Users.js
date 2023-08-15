import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {getUsers} from "../api/API";
import User from "./User";


const Users = (props) => {
    const {navigation} = props;

    const [users, setUsers] = useState([]);

    async function fetchData() {
        let users = await getUsers();
        setUsers([...users]);
    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <View>
            <FlatList data={users}
                      renderItem={({item}) => {
                          return <User item={item} nav={navigation}/>
                      }}
                      keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )

};

export default Users;


let styles = StyleSheet.create({});