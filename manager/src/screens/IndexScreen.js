import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {FontAwesome} from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import EmployListScreen from './EmployListScreen';
import CreateEmployScreen from './CreateEmployScreen';
import {navigate} from '../RootNavigation';
import {alreadySigned} from '../actions';
import EditEmployeeScreen from './EditEmployeeScreen';

const IndexScreen  = () => {
   

    const {user} = useSelector(state => state.auth); 
    const Stack = createStackNavigator();


    const dispatch = useDispatch();
    useEffect(() => {
        var firebaseConfig = {
          apiKey: "AIzaSyARcRg_YaS5XGMN6lYCEEznuG-S1E4fPhU",
          authDomain: "manager-c0f66.firebaseapp.com",
          databaseURL: "https://manager-c0f66.firebaseio.com",
          projectId: "manager-c0f66",
          storageBucket: "manager-c0f66.appspot.com",
          messagingSenderId: "1047616529678",
          appId: "1:1047616529678:web:c6013ca90c077573bde35f"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((useri) => dispatch(alreadySigned(useri)) );
      }, []);

    return (
        <Stack.Navigator>
      {
        (!!user)
        ? <>
        <Stack.Screen name='Employ' component={EmployListScreen} options= {{ headerTitleAlign: 'center', headerRight: () => (
            <TouchableOpacity onPress={() => navigate('Create Employee')}>
            <FontAwesome name='plus' size={25} style={{margin: 10, color: '#005086'}} />
            </TouchableOpacity>
        ) }} />
        <Stack.Screen name='Create Employee' component={CreateEmployScreen} options= {{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Edit Employee' component={EditEmployeeScreen} options= {{ headerTitleAlign: 'center' }} />
        </>
        : <>
        <Stack.Screen name='Register' component={RegisterScreen} options= {{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Login' component={LoginScreen} options= {{ headerTitleAlign: 'center' }} />
        </>
      }
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
});

export default IndexScreen;