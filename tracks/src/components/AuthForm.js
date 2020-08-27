import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Spacer from './Spacer';

const SignupScreen = ({headerText, errorMessage, submitButtonText, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer>
        <Text h3>{headerText}</Text>
        </Spacer>
        <Input 
        label="email" 
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        />
        <Spacer />
        <Input
        secureTextEntry 
        label="password" 
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        />
        {!!errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
         <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
        </>
    )
}

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15
    }
});

export default SignupScreen;