import React, { useContext, useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const {tryLocalSignIn} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn();
    }, []);

    return null;
}

const styles = StyleSheet.create({});

export default ResolveAuthScreen;