import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const Buton  = ({onPress, children}) => {

    
    return (
       <TouchableOpacity style={styles.butonStyle} onPress={onPress}>
           <Text style={styles.testStyle}>{children}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    butonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    testStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    }
});

export {Buton};