import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import yelp from '../API/yelp';
import { FlatList } from 'react-native-gesture-handler';


const ResultsShow = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
    <View>
       <Text style={styles.name}>{result.name}</Text>
       <FlatList 
       data={result.photos}
       keyExtractor = {photo => photo}
       renderItem = { ({item}) => {
        return <Image style={styles.image} source={{uri: item}} />
       }}
       />
    </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 5,
        alignSelf: 'center',
        borderRadius: 5
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    }
});

export default ResultsShow;