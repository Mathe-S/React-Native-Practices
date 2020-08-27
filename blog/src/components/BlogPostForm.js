import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.label}>Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(val) => setTitle(val)} />
        <Text style={styles.label}>Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(val) => setContent(val)} />
        <Button title='Add Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

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

export default BlogPostForm;