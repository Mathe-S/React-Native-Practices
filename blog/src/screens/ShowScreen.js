import React, { useContext } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find(blog => blog.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})} >
        <EvilIcons name='pencil' size={30} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    
});

export default ShowScreen;