import React, { useContext } from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';


const AcountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
        <Text style={styles.titile} >Acount</Text>
        <Spacer />
            <Button title='Sign Out' onPress={signout} />
        
        </SafeAreaView>
    )
}

AcountScreen.navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20} />
}

const styles = StyleSheet.create({
    titile: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: '900',
        marginBottom: 5
    }
});

export default AcountScreen;