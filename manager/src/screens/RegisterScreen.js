import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import { TouchableOpacity } from 'react-native-gesture-handler';


const RegisterScreen  = ({navigation}) => {

    
    return (
        <View style={{flex: 1}}>
            <LoginForm buttonText='Sign up' focusRegisterScreen />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textStyle}>Have an account? Log in</Text>
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

export default RegisterScreen;