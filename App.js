import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {getUsers} from "./src/api/API";


export default function App() {
    const [users, setUsers] = useState([]);

    console.log(users);

    async function fetchData() {
        let users = await getUsers();
        setUsers([...users]);
    }

    useEffect(() => {
        fetchData();

        return ()=>{
            console.log('hello');
        }
    }, []);


    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({});
