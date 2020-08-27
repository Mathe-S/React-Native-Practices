import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser, clearError } from '../actions';
import { Card, CardSection, Input, Buton, Spinner } from './common';


const LoginForm  = ({buttonText, login, focusLoginScreen, focusRegisterScreen }) => {

    const {email, password, err, loading} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onEmailChange = text => {
        dispatch(emailChanged(text));
    }

    const onPasswordChange = text => {
        dispatch(passwordChanged(text));
    }

    const onPressLogin = () => {
        dispatch(loginUser(email, password));
    }

    const onPressRegister = () => {
        dispatch(registerUser(email, password));
    }

    useEffect(() => {

        dispatch(clearError());

    }, [focusLoginScreen, focusRegisterScreen])

    const renderButton = () => {
        if (loading) return <Spinner size='large' />
        else return <Buton onPress={ !!login ? onPressLogin : onPressRegister}>
            {buttonText} 
        </Buton>
    }

    return (
        <Card>
        <CardSection>
        <Input 
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={onEmailChange}
            value={email}
        />
        </CardSection>

        <CardSection>
        <Input 
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={onPasswordChange}
            value={password}
        />
        </CardSection>

        <Text style={styles.errorStyle}>{err.toString()}</Text>

        <CardSection>
        {renderButton()}
        </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 16,
        margin: 5
    }
});




export default LoginForm;