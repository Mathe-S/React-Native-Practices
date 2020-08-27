import React, { useState, useContext } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    return <BlogPostForm onSubmit = { (title, content) =>
        addBlogPost(title,content, () => navigation.navigate('Blog'))
    } />
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;