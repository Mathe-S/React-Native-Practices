import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';


const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
         <AuthForm  
            headerText='Sign In To Your Account'
            errorMessage={state.errorMessage}
            submitButtonText='Sign In'
            onSubmit={signin}
         />
         <NavLink 
         routeName='Signup'
         text="Don't Have an Account?  Sign up!"

         />
        </View>
    )
}

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SigninScreen;