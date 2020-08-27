import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';


const LoginScreen  = ({navigation}) => {

    
    return (
        <View style={{flex: 1}}>
            <LoginForm buttonText='Sign in' login focusLoginScreen/>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textStyle}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
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