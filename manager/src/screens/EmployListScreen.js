import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { employeeFetch } from '../actions';
import { Card, CardSection } from '../components/common';
import { navigate } from '../RootNavigation';


const LoginScreen  = () => {

    const dispatch = useDispatch();
    const listData = useSelector(state => _.map(state.employees, (val, uid) => {
        return {...val, uid}
    }));

    useEffect(() => {
        dispatch(employeeFetch());
    }, []);

    return (
        <View style={{flex: 1}}>
         <FlatList 
            data={listData}
            keyExtractor={item => item.uid}
            renderItem = { ({item}) =>
            <Card>
            <TouchableOpacity onPress={() => navigate('Edit Employee', {employee: item})}>
            <CardSection>
            <Text>{item.name}</Text>
            </CardSection>
            </TouchableOpacity>
            </Card> 
            }
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'blue',
        alignSelf: 'center',
        margin: 10
    }
});

export default LoginScreen;