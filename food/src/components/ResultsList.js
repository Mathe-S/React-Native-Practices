import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }

    return (
    <View style={styles.container}>
        <Text style={styles.titleStyle} >{title}</Text>
     <FlatList 
     horizontal
     showsHorizontalScrollIndicator={false}
     data={results}
     keyExtractor = {(result) => result.id}
     renderItem = { ({item}) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id}) }>
        <ResultsDetails result={item} />
        </TouchableOpacity> )
     }}
     />
    </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);